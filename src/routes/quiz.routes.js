const express = require("express");
const { quizController } = require("../controllers/quiz.controller");

const quizRouter = express.Router();
quizRouter.post("/addquiz", quizController.addData);
quizRouter.get("/Getquiz", quizController.GetQuiz);
module.exports = {
  quizRouter,
};