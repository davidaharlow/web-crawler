const { exec } = require('child_process');
const path = require('path');

const uploadToElasticSearch = (fileName) => {
  const filePath = path.join(__dirname, `../${fileName}.json`);
  exec("curl -XPOST " + process.env.ENDPOINT + "/_bulk --data-binary @" + filePath + " -H 'Content-Type: application/json'", (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
};

module.exports = {
  uploadToElasticSearch,
};

