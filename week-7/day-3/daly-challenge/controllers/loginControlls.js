const hashpwd = require("../config/hashpwdData.js");
const users = require("../config/userData.js");
const bcrypt = require("bcrypt");

const tryLogin = (req, res) => {
  const { username, password } = req.body;
  const userIndex = hashpwd.findIndex((user) => user.username === username);
  if (userIndex === -1) {
    res.json({ message: "This Username does not exist!" });
  } else {
    const hashedPassword = hashpwd[userIndex].password;
    bcrypt.compare(password, hashedPassword, (err, result) => {
      if (result) {
        res.json({
          message: "Log in Succesful!",
          userInfo: users[userIndex],
        });
      } else {
        res.json({ message: "Your password is incorrect - try again." });
      }
    });
  }
};

const getUsersPassword = (req, res) => {
  res.json(hashpwd);
};

module.exports = {
  tryLogin,
  getUsersPassword,
};
