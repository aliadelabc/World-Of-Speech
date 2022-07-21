const { errorHandler } = require("../helpers/dbErrorHandler");
const testData = require("../seed/TestData.json");
const scores = testData.ranksList;
const scoresLength = scores.length;
let scoresLessThanSentValue = [];
exports.rank = (req, res) => {
  let fetchedScore = req.body.score;
  let calculatedRank = 0;
  let roundedCalculatedRank = 0;
  scoresLessThanSentValue = scores.filter((score) => score < fetchedScore);
  scoresLessThanSentValueLength = scoresLessThanSentValue.length;
  calculatedRank = (scoresLessThanSentValueLength / scoresLength) * 100;
  roundedCalculatedRank = calculatedRank.toFixed(2);

  try {
    return res.json(roundedCalculatedRank);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler(err),
    });
  }
};
