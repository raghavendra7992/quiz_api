const express = require("express");
const { connection } = require("./config/db");
const cors = require("cors");
const { quizRouter } = require("./routes/quiz.routes");
const app = express();
require("dotenv").config;

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send({ msg: "quiz game" });
});

app.use("/quiz", quizRouter);
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected Succesfull to db");
  } catch (err) {
    console.log("error from db");
    console.log(err);
  }
  console.log(`listing on port ${PORT}`);
});