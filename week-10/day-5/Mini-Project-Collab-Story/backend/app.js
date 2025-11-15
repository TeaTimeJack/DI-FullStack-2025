const express = require("express");
const registerRouter = require("./routes/registerRoutes.js");
const loginRouter = require("./routes/loginRoutes.js");
const userRouter = require("./routes/usersRoutes.js");
const storyRouter = require("./routes/storiesRoutes.js");
const contributorsRouter = require("./routes/contributorsRoutes.js");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 5002;
app.listen(PORT, () => {
  console.log(`Users api is running on ${PORT}`);
});

app.use("/", express.static(__dirname + "/public"));
app.use(express.json());
app.use(cookieParser());

app.use("api/datab/", registerRouter);
app.use("api/datab/", loginRouter);
app.use("api/datab/", userRouter);
app.use("api/datab/", storyRouter);
app.use("api/datab/", contributorsRouter);
