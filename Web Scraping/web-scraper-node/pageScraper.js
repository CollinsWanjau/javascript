// creates a new page instance in the browser, and these page instances can
// do quite a few things.
// created a page instance and then used the page.goto() method to navigate to the url
const scraperObject = {
  url: 'http://books.toscrape.com',
  async scraper (browser, category) {
    const page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);

    try {
      await page.goto(this.url)
      let selectedCategory = await page.$$eval('.side_categories > ul > li > ul > li > a', (links, _category) => {
	    // Search the item that has the matching text
	    /* links.map(a => a.textContent.replace(/(\r\n\t|\n|\r|\t|^\s|\s$|\B\s|\s\B)/gm, "") === _category ? a : null);
	    let link = links.filter(tx => tx !== null)[0]
	    return link.href */
              // Search for the link that has the matching text
        const matchingLink = links.find(a => a.textContent.replace(/(\r\n\t|\n|\r|\t|^\s|\s$|\B\s|\s\B)/gm, "") === _category);
        return matchingLink ? matchingLink.href : null;
      }, category)

      if (!selectedCategory) {
          throw new Error(`Category "${category}" not found`);
      }
      console.log(`Navigating to category: ${selectedCategory}`);
      await page.goto(selectedCategory, { waitUntil: 'networkidle0' });

      // Navigate to the selected category
      const scrapedData = [];

      // Wait for the required DOM to be rendered
      async function scrapeCurrentPage () {
        await page.waitForSelector('.page_inner', { timeout: 60000 });
        // Get the link to all the required books
        const urls = await page.$$eval('section ol > li', links => {
          // Make sure the book to be scraped is in stock
          links = links.filter(link => link.querySelector('.instock.availability > i').textContent !== 'In stock');
          // Extract the links from the data
          links = links.map(el => el.querySelector('h3 > a').href);
          return links;
        });

        // Loop through each of those links, open a new page instance and get the relevant data from them
        const pagePromise = (link) => new Promise(async (resolve, reject) => {
          const dataObj = {};
          const newPage = await browser.newPage();
          await newPage.goto(link);
          dataObj.bookTitle = await newPage.$eval('.product_main > h1', text => text.textContent);
          dataObj.bookPrice = await newPage.$eval('.price_color', text => text.textContent);
          dataObj.noAvailable = await newPage.$eval('.instock.availability', text => {
            // Strip new line and tab spaces
            text = text.textContent.replace(/(\r\n\t|\n|\r|\t)/gm, '');
            // Get the number of stock available
            const regexp = /^.*\((.*)\).*$/i;
            const stockAvailable = regexp.exec(text)[1].split(' ')[0];
            return stockAvailable;
          });
          dataObj.image = await newPage.$eval('#product_gallery img', img => img.src);
          dataObj.bookDescription = await newPage.$eval('#product_description', div => div.nextSibling.nextSibling.textContent);
          await newPage.$eval('table.table-striped > tbody > tr > td', table => table.textContent);
          resolve(dataObj);
          await newPage.close();
        });

        for (link in urls) {
          const currentPageData = await pagePromise(urls[link]);
          scrapedData.push(currentPageData);
          /* console.log(currentPageData); */
        }


        // When all the data on this page is done, click the next button and start the sraping of the next
        // page
        // You are going to check if this button exist first, so you know if there really is a next page
        let nextButtonExist = false;
        try {
          const nextButton = await page.$eval('.next > a', a => a.textContent);
          nextButtonExist = true;
        } catch (err) {
          nextButtonExist = false;
        }
        if (nextButtonExist) {
            await page.click('.next > a');
            return scrapeCurrentPage(); // Call this function recursively
        } 
        await page.close();
        return scrapedData;
      }
        
      const data = await scrapeCurrentPage();
      console.log(data);
      return data;
      console.log(urls);
    } catch(err) {
    }
  }
};

module.exports = scraperObject;
