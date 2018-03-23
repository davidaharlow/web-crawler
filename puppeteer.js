const puppeteer = require('puppeteer');
const fs = require('fs');

const scrape = (stream, elements) => {
  console.log(elements);
  elements.forEach((element) => {
    let movie = {
      title: element.childNodes[1].innerText,
      description: element.childNodes[7].innerText,
      director: element.childNodes[9].children[0].text,
    };
    stream.write('hey', 'utf-8', err => console.log(err));
  });
};

const navigate = async (url = 'https://www.imdb.com/search/title?groups=top_1000&sort=user_rating&view=advanced') => {
  const stream = fs.createWriteStream('movies.txt', 'utf-8', { flags: 'a' });
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 5,
  });
  const page = await browser.newPage();
  await page.goto(url);

  while (page.$('.lister-page-next')) {
    let results = await page.$$('lister-item-content');
    scrape(stream, results);
    try {
      await Promise.all([
        page.waitForNavigation(),
        page.click('.lister-page-next'),
      ]);
    } catch (error) {
      console.log(error);
    }
  }

  browser.close();
  stream.end();
  stream.on('finish', () => {
    console.error('Scrape Complete');
  });
};

navigate();

module.exports = {
  navigate,
};
