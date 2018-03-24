const puppeteer = require('puppeteer');
const fs = require('fs');

const scrape = (stream, movies) => {
  movies.forEach((movie) => {
    stream.write(`${movie}\n`, 'utf-8', (err) => {
      if (err) {
        console.log(err);
      }
    });
  });
};

const navigate = async (url) => {
  const stream = fs.createWriteStream('movies.txt', 'utf-8', { flags: 'a' });
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(url);

  while (page.$('.lister-page-next')) {
    const results = await page.evaluate(() => {
      let data = [];
      let elements = document.querySelectorAll('.lister-item-content');
      elements.forEach((element) => {
        let movie = {
          title: element.childNodes[1].innerText,
          description: element.childNodes[7].innerText,
          director: element.childNodes[9].children[0].text,
        };
        data.push(JSON.stringify(movie));
      });
      return data;
    });
    try {
      scrape(stream, results);
      if (page.$('.lister-page-next')) {
        await Promise.all([
          page.waitForNavigation(),
          page.click('.lister-page-next'),
        ]);
      }
    } catch (error) {
      console.log(error);
      browser.close();
      break;
    }
  }
  stream.end();
};

module.exports = {
  navigate,
};
