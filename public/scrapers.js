const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="kp-wp-tab-overview"]/div[1]/div[2]/div/div/div[1]/div[1]/a[1]/span[1]');
    // console.log(el);
    const txt = await el.getProperty('textContent');
    const rawTxt = await txt.jsonValue();

    console.log({ rawTxt });

    browser.close();
}



module.exports = {
    scrapeProduct
}

scrapeProduct('https://www.google.com/search?q=the+godfather');