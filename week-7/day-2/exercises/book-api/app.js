const express = require("express");
const bookRouter = require("./routes/bookRouter.js");

const app = express();
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Book api is running on ${PORT}`);
});

app.use("/api/books", bookRouter);
