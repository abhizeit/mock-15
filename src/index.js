require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connect = require("./config/db");
const questionRoutes = require("./controllers/question.routes");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/questions", questionRoutes);

app.get("/", (req, res) => {
  res.send("Hey there!!");
});
const port = process.env.PORT || 8080;

app.listen(port, async () => {
  await connect();
  console.log(`port is running on ${port}`);
});
