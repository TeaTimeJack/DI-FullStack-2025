const express = require("express");
const router = require("./routes/books.js");

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Books Port ${PORT} is running`);
});
app.use(express.json());

app.use("/", router);
