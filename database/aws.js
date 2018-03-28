const AWS = require('aws-sdk');

const es = new AWS.ES({
  // set up aws
});

module.exports = {
  es,
};
