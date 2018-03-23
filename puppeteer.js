const puppeteer = require('puppeteer');

const queue = [];

const navigate = async (url = 'https://www.imdb.com/search/title?groups=top_1000&sort=user_rating&view=advanced') => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 500,
  });
  const page = await browser.newPage();
  await page.goto(url);

  // const results = await page.$$('.lister-item-header');
  while (page.$$('.lister-page-next')) {
    const [response] = await Promise.all([
      page.waitForNavigation(),
      page.click('.lister-page-next'),
    ]);
  }
  // const [response] = await Promise.all([
  //   page.waitForNavigation({ waitUntil: 'networkIdle0' }),
  //   page.click('.lister-page-next'),
  // ]);

  // if (queue.length === 0) {
  //   browser.close();
  // }
  await browser.close();
};

navigate();

const scrape = async () => {
  //   append information to data file
  //   if queue is empty
  //   close browser
  //     else
  // repeat
};

module.exports = {
  navigate,
};

/* 
  Launch the browser with initial url
  Click next selector
    wait for navigation
      Push url to queue

  Repeat until no more next selectors

  When URL aggregation is done
    dequeue URL and invoke func
    scrape website

*/

/* 
  Launch the browser with initial url
  Scrape website
  Click next selector
    wait for navigation
    if next selector exists
      repeat
    else 
      close browser
*/