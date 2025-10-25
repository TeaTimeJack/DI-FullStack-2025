const express = require("express");
const registerRouter = require("./routes/registerRoutes.js");
const loginRouter = require("./routes/loginRoutes.js");
const userRouter = require("./routes/usersRoutes.js");

const app = express();
const PORT = 5002;
app.listen(PORT, () => {
  console.log(`Users api is running on ${PORT}`);
});

app.use("/", express.static(__dirname + "/public"));
app.use(express.json());

app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/users", userRouter);
