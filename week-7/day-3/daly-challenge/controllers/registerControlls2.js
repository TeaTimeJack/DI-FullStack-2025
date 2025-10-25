const bcrypt = require("bcrypt");
const saltRounds = 6;
const { insertHashPassword } = require("../models/hashpwd-model.js");
const {
  insertNewUser,
  getUserByUsernameDB,
} = require("../models/user-models.js");

// const register = (req, res) => {
//   const { first_name, last_name, email, username, password } = req.body;
//   getUserByUsernameDB(username)
//     .then((rows) => {
//       if (rows.length === 0) {
//         bcrypt.hash(password, saltRounds, (err, hash) => {
//           if (err) {
//             console.log(err);
//           } else {
//             insertHashPassword(username, hash);
//             insertNewUser(email, username, first_name, last_name);
//             res.json({ message: "Registration Complete!" });
//           }
//         });
//       } else {
//         res.json({ message: "This username already exists" });
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//       res
//         .status(500)
//         .json({ message: "Something went wrong with the server or database." });
//     });
// };

const register = async (req, res) => {
  console.log(req.body);
  const { first_name, last_name, email, username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const existingUsers = await getUserByUsernameDB(username);
    console.log(existingUsers);

    if (existingUsers.length > 0) {
      return res.json({ message: "This username already exists" });
    }

    const hash = await bcrypt.hash(password, saltRounds);
    await insertNewUser(email, username, first_name, last_name);
    await insertHashPassword(username, hash);
    res.status(201).json({ message: "Registration Complete!" });
  } catch (err) {
    console.log("Registration Error:", err);
    res
      .status(500)
      .json({ message: "Something went wrong with the server or database." });
  }
};

module.exports = register;
