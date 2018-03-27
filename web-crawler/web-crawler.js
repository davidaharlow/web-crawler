const puppeteer = require('puppeteer');
const { createWritable, writeToFile } = require('./library');

const initializeScrape = async ({ url, nextSelector, listSelector, fileName, fileType, configuration }) => {
  console.log('scraping...');
  const writable = createWritable(fileName, fileType);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);

  page.on('console', msg => console.log(msg.text()));

  while (await page.$(nextSelector)) {
    const pageResults = await page.evaluate((listSelector, configuration) => {
      let scrapedContent = [];
      let elements = document.querySelectorAll(listSelector);

      elements.forEach((element) => {
        let item = {};
        for (let desiredAttribute in configuration) {
          let attributeSelector = configuration[desiredAttribute];
          item[desiredAttribute] = element.querySelector(attributeSelector).innerText;
        }
        scrapedContent.push(JSON.stringify(item));
      });

      return scrapedContent;
    }, listSelector, configuration);

    writeToFile(writable, pageResults);
    await Promise.all([
      page.waitForNavigation(),
      page.click(nextSelector)
    ]);
  }

  const lastPageResults = await page.evaluate((listSelector, configuration) => {
    let scrapedContent = [];
    let elements = document.querySelectorAll(listSelector);

    elements.forEach((element) => {
      let item = {};
      for (let desiredAttribute in configuration) {
        let attributeSelector = configuration[desiredAttribute];
        item[desiredAttribute] = element.querySelector(attributeSelector).innerText;
      }
      scrapedContent.push(JSON.stringify(item));
    });

    return scrapedContent;
  }, listSelector, configuration);
  writeToFile(writable, lastPageResults);

  browser.close();
  writable.end();
  console.log('...scraping complete');
};

module.exports = {
  initializeScrape,
};
