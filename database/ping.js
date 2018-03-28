const { client } = require('./config');

client.ping({ requestTimeout: 1000 }, (error) => {
  if (error) {
    console.trace('elasticsearch cluster is down!');
  } else {
    console.log('elasticsearch cluster is up!');
  }
});
