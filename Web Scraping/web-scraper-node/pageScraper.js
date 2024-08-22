// creates a new page instance in the browser, and these page instances can
// do quite a few things.
// created a page instance and then used the page.goto() method to navigate to the url
const scraperObject = {
	url: 'http://books.toscrape.com',
	async scraper(browser){
		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`)
		await page.goto(this.url);
	}
}

module.exports = scraperObject;
