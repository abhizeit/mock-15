const express = require("express");

const Question = require("../models/question.model");

const app = express.Router();

app.get("/", async (req, res) => {
  const { category = "History", difficulty = "easy", amount = 5 } = req.body;
  try {
    let data = await Question.find({ category, difficulty }).limit(amount);
    res.send({ error: false, data });
  } catch (error) {
    res.send({ error: true });
  }
});

module.exports = app;
