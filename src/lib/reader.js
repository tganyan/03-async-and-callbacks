'use strict';

const fs = require('fs');

const reader = module.exports = {};

reader.readFirstNCharactersAsync = (filePath, characters, callback) => {
  const bookArray = [];

  if (filePath[0]) {
    fs.readFile(filePath[0], (error, data) => {
      if (error) {
        return callback(error, null);
      }
      bookArray.push(data.toString('utf8', 0, characters));

      fs.readFile(filePath[1], (error, data) => {
        if (error) {
          return callback(error, null);
        }
        bookArray.push(data.toString('utf8', 0, characters));

        fs.readFile(filePath[2], (error, data) => {
          if (error) {
            return callback(error, null);
          }

          bookArray.push(data.toString('utf8', 0, characters));

          return bookArray;
        });
      });
    });
  }
};
