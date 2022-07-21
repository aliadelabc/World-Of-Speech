//intializing express
const express = require("express");

//using express router
const router = express.Router();

//intializing controllers to be used in routers
const { wordList } = require("../controllers/words");

//Method : GET
//Returns : words list
//Route : /word-list
router.get("/word-list", wordList);

//exporting router to be used in server.js
module.exports = router;
