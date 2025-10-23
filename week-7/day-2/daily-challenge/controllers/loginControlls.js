const hashpwd = require("../config/hashpwdData.js");
const users = require("../config/userData.js");
const bcrypt = require("bcrypt");

const tryLogin = (req, res) => {
  const { username, password } = req.params;
  const paswordIndex = hashpwd.findIndex((user) => user.username === username);
  const usernameIndex = users.findIndex((user) => user.username === username);
  if (paswordIndex === -1 || usernameIndex === -1) {
    res.json({ messege: "This Username does not exist!" });
  } else {
    bcrypt.compare(password, hashpwd[paswordIndex].password, (err, result) => {
      if (result) {
        res.json({
          messege: "Log in Succesful!",
          userInfo: users[usernameIndex],
        });
      } else {
        res.json({ messege: "Your password is incorrect - try again." });
      }
    });
  }
};

module.exports = tryLogin;
