const { client } = require('./config');

const search = async (queryString) => {
  let responseBody = await client.search({
    q: queryString,
    size: 15,
  });

  let { hits: { hits } } = responseBody;
  let results = hits.map(hit => hit._source.title);

  let results = hits.map((hit) => {
    let result = Object.assign({}, hit._source);
    result.id = hit._id;
    return result;
  });

  return results;
};

module.exports = {
  search,
};
