const router = require('express').Router();
const { scrapeSite } = require('../web-crawler/web-crawler');
const { search } = require('../database/query');
const { uploadToElasticSearch } = require('../database/upload');

router.post('/web-crawler', async (req, res) => {
  try {
    let { body: params } = req;
    let { fileName } = params;

    await scrapeSite(params);
    await uploadToElasticSearch(fileName);

    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/search:query', async (req, res) => {
  let { params: { query } } = req;
  try {
    let results = await search(query);
    res.send(results);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = {
  router,
};

