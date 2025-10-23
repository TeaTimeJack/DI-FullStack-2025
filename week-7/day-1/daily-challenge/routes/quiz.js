const { Router } = require("express");
const router = Router();

const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];
let score = 0;

router.get("/quiz", (req, res) => {
  res.send(triviaQuestions[score].question);
});

router.post("/quiz", (req, res) => {
  const { answer } = req.body;
  if (answer.toLowerCase() === triviaQuestions[score].answer.toLowerCase()) {
    ++score;
    if (score === triviaQuestions.length) {
      res.json({ message: "You Have answered all the Questions- GOOD JOB!" });
    } else {
      res.json({ message: "Correct", next: triviaQuestions[score].question });
    }
  } else {
    res.json({
      message: "Worng - try again",
      next: triviaQuestions[score].question,
    });
  }
});

router.get("/quiz/score", (req, res) => {
  res.send(score);
});

module.exports = router;
