# Async and Callback

This is a project for understanding and working with async and the event loop. Using file system, I am attempting to read and return the contents of text files based on certain parameters. In addition, I am attempting to return them in the desired order asynchronously. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You must have NodeJS installed along with either NPM or Yarn.

### Installing

Copy the link from the github repository
In the command line, navigate to the parent directory where you want to store this project
In the command line, type:
```
git clone <repository url>
```
Once the project files are there, type:
```
npm install
```
or (if you have yarn installed)
```
yarn i
```

## Running the tests

There are three tests for this program:

1. A test to ensure the correct amount of characters are returned according to the provided argument.
2. A test to ensure an array is returned as the output.
3. A test to ensure the items are being returned in the expected order.

To run the tests, from the command line type:
```
npm run test
```

## Built With

* [NodeJS](https://nodejs.org) - The javascript runtime used
* [Jest](https://jestjs.io/) - Testing platform used
* [Eslint](https://eslint.org/) - Coding style linter
* [FIle System](https://nodejs.org/api/fs.html) - NPM package for reading files

## Authors

*  [**Tyler Anyan**](http://tyleranyan.com/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
