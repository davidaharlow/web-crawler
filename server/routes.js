const router = require('express').Router();
const { initializeScrape } = require('../web-crawler/web-crawler');
const { search } = require('../database/query');

router.get('/', (req, res) => {
  res.sendStatus(201);
});

router.post('/web-crawler', async (req, res) => {
  try {
    let { params } = req.body;
    await initializeScrape(params);
    res.send({ message: `${params.fileName} now searchable!` });
  } catch (error) {
    res.send(error);
  }
});

router.get('/search', async (req, res) => {
  let { query: { query } } = req;
  try {
    let results = await search(query);
    res.send(results);
  } catch (error) {
    res.send(error);
  }
});

module.exports = {
  router,
};

