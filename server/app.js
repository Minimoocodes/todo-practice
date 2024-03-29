const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
require("dotenv").config();
const app = express();
const MONGODB_URI_PROD = process.env.VITE_MONGODB_URI_PROD;

app.use(bodyParser.json());
app.use(cors());
app.use("/api", indexRouter);
// this adds /api in front of IndexRouter, which makes it more clear in the url.

const mongoURI = MONGODB_URI_PROD;
const PORT = process.env.PORT || 8080;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("mongoose connected"))
  .catch((err) => {
    console.log("DB connection fail", err);
  });

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.listen(PORT, () => {
  console.log(`app listening to ${PORT}`);
});
