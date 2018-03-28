const { client } = require('./config');

const search = async (queryString) => {
  try {
    let responseBody = await client.search({
      q: queryString,
      size: 15,
    });
    let { hits: { hits } } = responseBody;
    let results = hits.map(hit => hit._source.title);
    return results;
  } catch (error) {
    console.trace(error.message);
  }
};

module.exports = {
  search,
};

/*

search('spielberg');

Outputs:

[ 'Catch Me If You Can',
  'Minority Report',
  'Schindler\'s List',
  'E.T. the Extra-Terrestrial',
  'Saving Private Ryan',
  'Jaws',
  'The Color Purple',
  'Raiders of the Lost Ark',
  'Jurassic Park',
  'Close Encounters of the Third Kind',
  'Bridge of Spies',
  'Indiana Jones and the Last Crusade',
  'Empire of the Sun',
  'Indiana Jones and the Temple of Doom',
  'Munich' ]

*/
