const { errorHandler } = require("../helpers/dbErrorHandler");
const testData = require("../seed/TestData.json");
const words = testData.wordList;
exports.wordList = (req, res) => {
  const randomizedWords = [];
  while (randomizedWords.length !== 10) {
    const word = words[Math.floor(Math.random() * words.length)];
    if (randomizedWords.indexOf(word) === -1) randomizedWords.push(word);
  }
  try {
    return res.json(randomizedWords);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler(err),
    });
  }
};
