// /* import pageScraper from './pageScraper' */
const pageScraper = require('./pageScraper');
// This part controls the scraping process.
// It uses the browser instance to control the pageScraper.js file, which is
// where all the scraping scripts execute.
async function scrapeAll (browserInstance) {
  let browser;
  try {
    browser = await browserInstance;
    const scrapedData = [];
    // Call the scraper for different set of books to be scraped
    scrapedData.Travel = await pageScraper.scraper(browser, 'Travel');
    scrapedData.HistoricalFiction = await pageScraper.scraper(browser, 'Historical Fiction')
    scrapedData.Mystery = await pageScraper.scraper(browser, 'Mystery')
    await browser.close();
    console.log(scrapedData);
  } catch (err) {
    console.log('Could not resolve the browser instance => ', err);
  }
}

/* exporting a function that takes a browser instance and passes it to a function */
module.exports = (browserInstance) => scrapeAll(browserInstance);
