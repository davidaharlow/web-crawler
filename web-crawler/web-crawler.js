/* eslint-disable */
const puppeteer = require('puppeteer');
const { createWritable, writeToFile, deleteFile } = require('./library');
const { uploadToElasticSearch } = require('../database/upload');

const initializeScrape = async ({ url, nextSelector, listSelector, itemDescriptor, fileName, fileType, configuration }) => {
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

    writeToFile(writable, pageResults, fileName, itemDescriptor);
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
  writeToFile(writable, lastPageResults, fileName, itemDescriptor);

  browser.close();
  writable.end();

  console.log('Scraping complete. Loading into ElasticSearch');

  uploadToElasticSearch(fileName);
};

module.exports = {
  initializeScrape,
};
