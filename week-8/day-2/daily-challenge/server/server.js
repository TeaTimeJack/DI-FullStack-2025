const express = require("express");

const app = express();
const PORT = 3802;
app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});
app.use(express.json());
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello From Express" });
});
app.post("/api/world", (req, res) => {
  console.log(req.body);
  const { input } = req.body;
  res.json({
    message: `I received your POST request. This is what you sent me: ${input} `,
  });
});
