const PORT = process.env.PORT || 4000;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const { notFound, errorHandler } = require("./middlewares/error");
const wordRoute = require("./routes/word");
const rankRoute = require("./routes/rank");

//queue initilization
const expressQueue = require("./node_modules/express-queue");
const queueMw = expressQueue({ activeLimit: 1, queuedLimit: -1 });
require("dotenv").config();

app.use(bodyParser.json());
app.use(queueMw); //use queue middleware

//implementing queue
//accumlator of rejected
let rejectAccumlator = 0;
//accumlator of compeleted
let completeAccumlator = 0;

queueMw.queue.on("process", function () {
  console.log(
    "------------------------processing request------------------------"
  );
});

queueMw.queue.on("reject", function () {
  console.log(
    "------------------------rejecting request------------------------"
  );
});

queueMw.queue.on("complete", function () {
  console.log(
    "------------------------completed queue request------------------------"
  );
});

app.use(cors());

// words Middleware
app.use("/api/v1", wordRoute);
// words Middleware
app.use("/api/v1", rankRoute);
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
