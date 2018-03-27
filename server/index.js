const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { router } = require('./routes');

const server = express();
const PORT = process.env.PORT || 4000;

server.use(bodyParser.json());
server.use((req, res) => console.log(`${req.method} REQUEST @ ${req.path}`));
server.use(express.static(path.join(__dirname, '/public')));
server.use(router);
server.listen(PORT, () => console.log(`server is listening on port ${PORT}...`));


/* 

let params = {
  url: 'https://www.imdb.com/search/title?groups=top_1000&sort=user_rating&view=advanced',
  nextSelector: '.lister-page-next',
  listSelector: '.lister-item-content',
  fileName: 'imdb',
  fileType: 'json',
  configuration: {
    title: 'div.lister-item-content > h3 > a',
    description: 'div.lister-item-content > p:nth-child(4)',
    director: 'div.lister-item-content > p:nth-child(5) > a:nth-child(1)',
  }
};

*/