const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
  host: 'https://search-web-crawler-vnj5ttenwxouwxqhu7xphxidfq.us-west-1.es.amazonaws.com',
  log: 'trace',
});

module.exports = {
  client,
};
