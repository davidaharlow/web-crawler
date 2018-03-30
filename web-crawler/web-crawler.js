/* eslint-disable */
const puppeteer = require('puppeteer');
const { createWritable, writePageResults } = require('./library');

const scrapeSite = async (params) => {
  let {
    url,
    nextSelector,
    listSelector,
    itemDescriptor,
    fileName,
    fileType,
    configuration,
  } = params;

  const writable = createWritable(fileName, fileType);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);

  page.on('console', msg => console.log(msg.text()));

  const getPageResults = async () => {
    const pageResults = await page.evaluate((listSelector, configuration) => {
      const scrapedContent = [];
      const listElements = document.querySelectorAll(listSelector);

      listElements.forEach((element) => {
        const item = {};
        for (let desiredAttribute in configuration) {
          const attributeSelector = configuration[desiredAttribute];
          item[desiredAttribute] = element.querySelector(attributeSelector).innerText;
        }
        scrapedContent.push(JSON.stringify(item));
      });

      return scrapedContent;
    }, listSelector, configuration);
    return pageResults;
  };

  const writeAllPageResults = async () => {
    while (await page.$(nextSelector)) {
      const pageResults = await getPageResults();
      writePageResults(writable, pageResults, fileName, itemDescriptor);
      await Promise.all([
        page.waitForNavigation(),
        page.click(nextSelector)
      ]);
    }

    const lastPageResults = await getPageResults();
    writePageResults(writable, lastPageResults, fileName, itemDescriptor);
  };

  await writeAllPageResults();

  browser.close();
  writable.end();
};

module.exports = {
  scrapeSite,
};
