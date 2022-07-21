//port number
const PORT = process.env.PORT || 4000;

//express intilization
const express = require("express");

//express app intilization
const app = express();

//body parser intilization
const bodyParser = require("body-parser");

//cors intilization
const cors = require("cors");

//error handler middlewares
const { notFound, errorHandler } = require("./middlewares/error");

//routes
const wordRoute = require("./routes/word");
const rankRoute = require("./routes/rank");

//queue initilization
const expressQueue = require("./node_modules/express-queue");
const queueMw = expressQueue({ activeLimit: 1, queuedLimit: -1 });
require("dotenv").config();

app.use(bodyParser.json()); // use body parser
app.use(queueMw); //use queue middleware

//implementing queue
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

app.use(cors()); //use cors

// words Middleware
app.use("/api/v1", wordRoute);
// ranks Middleware
app.use("/api/v1", rankRoute);
//using error handlers
app.use(notFound);
app.use(errorHandler);

//running the server
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
