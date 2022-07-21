//intizalizing error handler helper function to send error message to client-side
const { errorHandler } = require("../helpers/dbErrorHandler");

//fetching data to be sent to client-side
const testData = require("../seed/TestData.json");

//intializing score list
const scores = testData.ranksList;

//fetching scores array length
const scoresLength = scores.length;

//intializing score list that containes values les than value sent in req.body
let scoresLessThanSentValue = [];

//controller used by rank router
//returns an endpoint that takes the final score in the request body, and responds back with the rank%
//rounded to the nearest hundredth. The rank represents the percentage of scores
exports.rank = (req, res) => {
  //fetching score sent by client-side in req.body as json format
  let fetchedScore = req.body.score;

  //intializing rank to be sent to be used in rounded rank calculation
  let calculatedRank = 0;

  //intializing rank to be sent to client-side
  let roundedCalculatedRank = 0;

  //getting list of scores less than score sent by client-side
  scoresLessThanSentValue = scores.filter((score) => score < fetchedScore);

  //getting list length of scores less than score sent by client-side
  scoresLessThanSentValueLength = scoresLessThanSentValue.length;

  //calculating rank
  calculatedRank = (scoresLessThanSentValueLength / scoresLength) * 100;

  //rounding rank to nearest hundredth
  roundedCalculatedRank = calculatedRank.toFixed(2);

  //send data to client-side
  try {
    return res.json(roundedCalculatedRank);
  } catch (err) {
    //catching errors
    return res.status(400).json({
      error: errorHandler(err),
    });
  }
};
