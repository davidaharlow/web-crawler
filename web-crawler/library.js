const fs = require('fs');

const createWritable = (fileName, fileType) => fs.createWriteStream(`${fileName}.${fileType}`, 'utf-8', { flags: 'a' });

const writeToFile = (writable, pageResults) => {
  pageResults.forEach((result) => {
    writable.write(`${result}\n`, 'utf-8', (err) => err ? console.log(err) : null);
  });
};

module.exports = {
  createWritable,
  writeToFile,
};
