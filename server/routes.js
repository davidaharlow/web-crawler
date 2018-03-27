const router = require('express').Router();
const { initializeScrape } = require('../puppeteer.js');

router.get('/', (req, res) => {
  res.sendStatus(201);
});

router.get('/puppeteer', async (req, res) => {
  try {
    console.log(req.body);
    initializeScrape(req.body);
    res.sendStatus(201);
  } catch (error) {
    res.send(JSON.stringify(error));
  }
});

module.exports = {
  router,
};

