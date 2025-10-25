const bcrypt = require("bcrypt");
const saltRounds = 6;
const hashpwd = require("../config/hashpwdData.js");
const users = require("../config/userData.js");

const register = (req, res) => {
  const { first_name, last_name, email, username, password } = req.body;
  const usernameIndex = users.findIndex((user) => user.username === username);
  if (usernameIndex === -1) {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        console.log(err);
      } else {
        const newPassword = {
          id: hashpwd.length + 1,
          username,
          password: hash,
        };
        const newUser = {
          id: users.length + 1,
          email: email,
          username: username,
          first_name: first_name,
          last_name: last_name,
        };
        hashpwd.push(newPassword);
        users.push(newUser);
        res.json({ message: "Registration Complete!" });
      }
    });
  } else {
    res.json({ message: "This username already exists" });
  }
};

module.exports = register;
