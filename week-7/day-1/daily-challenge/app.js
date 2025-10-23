const express = require("express");
const router = require("./routes/quiz.js");

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Quiz Port ${PORT} is running`);
});
app.use(express.json());

app.use("/", router);
