const fs = require('fs');

const createWritable = (fileName, fileType) => fs.createWriteStream(`${fileName}.${fileType}`, 'utf-8', { flags: 'a' });

let count = 0;

const writePageResults = (writable, pageResults, fileName, itemDescriptor) => {
  pageResults.forEach((result) => {
    let index = {
      index: {
        _index: fileName,
        _type: itemDescriptor,
        _id: count,
      },
    };
    count += 1;

    writable.write(`${JSON.stringify(index)}\n${result}\n`, 'utf-8', err => (err ? console.log(err) : null));
  });
};

module.exports = {
  createWritable,
  writePageResults,
};
