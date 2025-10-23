const express = require("express");
const blogsRouter = require("./routes/blogrouter.js");

const app = express();

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Run on ${PORT}`);
});

/* body-parser (npm package - includs in express at V5+*/
app.use(express.json());
app.use("/blogs", blogsRouter);
