const express = require("express");
const router = require("./routes/todo.js");

const app = express();
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Todo's Port ${PORT} is running`);
});
app.use(express.json());

app.use("/",router)