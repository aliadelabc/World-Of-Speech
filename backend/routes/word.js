const express = require("express");
const router = express.Router();
const { wordList } = require("../controllers/words");

router.get("/word-list", wordList);

module.exports = router;
