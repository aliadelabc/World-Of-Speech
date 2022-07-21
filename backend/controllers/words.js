//intizalizing error handler helper function to send error message to client-side
const { errorHandler } = require("../helpers/dbErrorHandler");

//fetching data to be sent to client-side
const testData = require("../seed/TestData.json");

//intializing word list
const words = testData.wordList;

//controller used by word router
//returns an endpoint that returns a list of 10 objects selected randomly from the "wordsList"
//The array should include at least 1 adjective, 1 adverb, 1 noun, and 1 verb.
exports.wordList = (req, res) => {
  //intializing words random list
  const randomizedWords = [];

  //shuffeling word list
  while (randomizedWords.length !== 10) {
    const word = words[Math.floor(Math.random() * words.length)];
    if (randomizedWords.indexOf(word) === -1) randomizedWords.push(word);
  }

  //send data to client-side
  try {
    return res.json(randomizedWords);
  } catch (err) {
    //catching errors
    return res.status(400).json({
      error: errorHandler(err),
    });
  }
};
