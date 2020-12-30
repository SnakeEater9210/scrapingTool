const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    console.log('enterScraper');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('/html/body/div[7]/div[2]/div[10]/div[1]/div[3]/div[1]/div/div[1]/div[2]/div/div/div[1]/div[2]/div/div/div[1]/div[1]/a[1]/span[1]');
    const txt = await el.getProperty('textContent');
    const rawTxt = await txt.jsonValue();

    browser.close();

    return { rawTxt }

}



module.exports = {
    scrapeProduct
}

