const {
  getPasswordByUsernameDB,
  getAllPasswordsDB,
} = require("../models/hashpwd-model.js");
const { getUserByUsernameDB } = require("../models/user-models.js");
const bcrypt = require("bcrypt");

// const tryLogin = async (req, res) => {
//   const { username, password } = req.body;
//   if (!username || !password) {
//     return res.status(400).json({ message: "All fields are required." });
//   }

//   try {
//     const existingUsers = await getUserByUsernameDB(username);
//     if (existingUsers.length === 0) {
//        res.json({ message: "This Username does not exist!" });
//     }
//     const hashedPassword = await getPasswordByUsernameDB(username);
//     bcrypt.compare(password, hashedPassword, (err, result) => {
//       if (result) {
//          res.json({
//           message: "Log in Succesful!",
//           userInfo: existingUsers,
//         });
//       } else {
//          res.json({ message: "Your password is incorrect - try again." });
//       }
//     });
//   } catch (err) {
//     console.log("Registration Error:", err);
//     res
//       .status(500)
//       .json({ message: "Something went wrong with the server or database." });
//   }
// };

// module.exports = tryLogin;

const bcryptComparePromise = (password, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, result) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(result);
      }
    });
  });
};

const tryLogin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const existingUsers = await getUserByUsernameDB(username);
    if (existingUsers.length === 0) {
      res.json({ message: "This Username does not exist!" });
    }
    const hashedPassword = await getPasswordByUsernameDB(username);
    const result = await bcryptComparePromise(
      password,
      hashedPassword[0].password
    );

    if (result) {
      res.json({
        message: "Log in Successful!",
        userInfo: existingUsers[0],
      });
    } else {
      res.json({ message: "Your password is incorrect - try again." });
    }
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({
      message: "Something went wrong with the server or database.",
    });
  }
};

const getUsersPassword = (req, res) => {
  // res.json(users);
  getAllPasswordsDB()
    .then((rows) => {
      res.json(rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ message: "somthing went wrong" });
    });
};

module.exports = {
  tryLogin,
  getUsersPassword,
};
