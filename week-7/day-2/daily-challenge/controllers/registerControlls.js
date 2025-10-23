const bcrypt = require("bcrypt");
const saltRounds = 6;
const hashpwd = require("../config/hashpwdData.js");
const users = require("../config/userData.js");

const register = (req, res) => {
  const { username, password } = req.body;
  const usernameIndex = users.findIndex((user) => user.username === username);
  if (usernameIndex === -1) {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        console.log(err);
      } else {
        const newPassword = { id: hashpwd.length + 1, username, hash };
        const newUser = {
          id: users.length + 1,
          email: "None yet",
          username,
          first_name: "None yet",
          last_name: "None yet",
        };
        hashpwd.push(newPassword);
        users.push(newUser);
        res.json({ message: "Registration Complete!" });
      }
    });
  } else {
    res.json({ message: "This username is taken... Try another" });
  }
};

module.exports = register;
