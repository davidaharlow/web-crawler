const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { router } = require('./routes');

const server = express();
const PORT = process.env.PORT || 4000;

server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, '/public')));
server.use(router);
server.listen(PORT, () => console.log(`server is listening on port ${PORT}...`));
