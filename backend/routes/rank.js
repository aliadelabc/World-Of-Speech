const express = require("express");
const router = express.Router();
const { rank } = require("../controllers/ranks");

router.post("/fetch-rank", rank);

module.exports = router;
