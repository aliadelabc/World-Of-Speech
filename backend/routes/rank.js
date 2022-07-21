//intializing express
const express = require("express");

//using express router
const router = express.Router();

//intializing controllers to be used in routers
const { rank } = require("../controllers/ranks");

//Method : POST
//Returns : Rank of Student
//Route : /fetch-list
router.post("/fetch-rank", rank);

//exporting router to be used in server.js
module.exports = router;
