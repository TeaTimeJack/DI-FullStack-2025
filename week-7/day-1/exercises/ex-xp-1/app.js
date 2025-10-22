const express = require("express");
const router = require("./routes/index.js");

const app = express();

const PORT = 3000;
app.listen(PORT, () =>{
    console.log("Running Port: "+ PORT );
});

app.use(express.json());

app.use("/", router);
app.use("/about", router);