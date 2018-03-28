const { client } = require('./config');

const search = async (queryString) => {
  let responseBody = await client.search({
    q: queryString,
    size: 15,
  });

  let { hits: { hits } } = responseBody;
  let results = hits.map(hit => hit._source.title);

  return results;
};

module.exports = {
  search,
};
