'use strict';

const fileReader = require('./lib/reader');

const defaultLoremPath = `${__dirname}/data/lorem.txt`;
const baconLoremPath = `${__dirname}/data/bacon.txt`;
const starWarsLoremPath = `${__dirname}/data/starwars.txt`;

const CHARACTERS_TO_READ = 50;
const printString = (string) => {
  console.log(string);
  console.log(('-----------------------------'));
};

fileReader
  .readFirstNCharactersAsync(
    [starWarsLoremPath, defaultLoremPath, baconLoremPath], CHARACTERS_TO_READ, (data) => {
      printString(data);
    },
  );
