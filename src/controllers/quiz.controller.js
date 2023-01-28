const { quizModel } = require("../model/quiz.model");

const addData = async (req, res) => {
  const x = await quizModel.insertMany(req.body);
  console.log(x);
};
const GetQuiz = async (req, res) => {
  let { question, type, difficulty } = req.query;
  console.log(question, type, difficulty);
  if(question && type && difficulty) {
    const data = await quizModel.find({
      type: type,
      difficulty: difficulty,
    }).limit(question);

    res.send(data);
  } else {
    res.send({ msg: "please choose correct info" });
  }
};
const quizController = {
  GetQuiz,
  addData,
};
module.exports = {
  quizController
};