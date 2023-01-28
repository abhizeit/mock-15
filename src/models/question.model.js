const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  category: String,
  type: String,
  difficulty: String,
  question: String,
  correct_answer: String,
  incorrect_answers: [String],
});

const Question = mongoose.model("question", questionSchema);
module.exports = Question;
