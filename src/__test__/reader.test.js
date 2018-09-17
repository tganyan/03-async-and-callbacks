'use strict';

const fileReader = require('../lib/reader');

const defaultLoremPath = `${__dirname}/../data/lorem.txt`;
const baconLoremPath = `${__dirname}/../data/bacon.txt`;
const starWarsLoremPath = `${__dirname}/../data/starwars.txt`;

const CHARACTERS_TO_READ = 50;

describe('#reader.js', () => {
  describe('testing output', () => {
    test('Ensure first 50 characters are read', (done) => {
      fileReader
        .readFirstNCharactersAsync(
          [starWarsLoremPath, baconLoremPath, defaultLoremPath], CHARACTERS_TO_READ, (data) => {
            expect(data[0]).toEqual('Lucas ipsum dolor sit amet til moff trioculus oppo');
            done();
          },
        );
    });
    test('Ensure function returns an array', (done) => {
      fileReader
        .readFirstNCharactersAsync(
          [starWarsLoremPath, baconLoremPath, defaultLoremPath], CHARACTERS_TO_READ, (data) => {
            expect(data).toEqual(typeof 'array');
            done();
          },
        );
    });
    test('Ensure function returns items in correct order', (done) => {
      fileReader
        .readFirstNCharactersAsync(
          [starWarsLoremPath, baconLoremPath, defaultLoremPath], CHARACTERS_TO_READ, (data) => {
            expect(data).toEqual(
              ['Lucas ipsum dolor sit amet til moff trioculus oppo',
                'Bacon ipsum dolor amet pancetta kevin sirloin ribe',
                'Lorem ipsum dolor sit amet, consectetur adipiscing'],
            );
            done();
          },
        );
    });
  });
});
