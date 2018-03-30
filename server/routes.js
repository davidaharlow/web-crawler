const router = require('express').Router();
const { scrapeSite } = require('../web-crawler/web-crawler');
const { search } = require('../database/query');
const { uploadToElasticSearch } = require('../database/upload');

router.get('/', (req, res) => {
  res.sendStatus(201);
});

router.post('/web-crawler', async (req, res) => {
  try {
    let { params } = req.body;
    let { fileName } = params;

    await scrapeSite(params);
    uploadToElasticSearch(fileName);

    res.send({ loading: true });
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

