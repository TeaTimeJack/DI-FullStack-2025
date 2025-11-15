const bcrypt = require("bcrypt");
const saltRounds = 10;
const {
  insertNewUser,
  getUserByUsernameDB,
  getUserByEmailDB,
} = require("../models/user-models.js");

const register = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !password || !email) {
    return res
      .status(400)
      .json({ message: "UserName, Password And Email fields are required." });
  }

  try {
    const existingUsers = await getUserByUsernameDB(username);
    console.log(existingUsers);

    if (existingUsers.length > 0) {
      return res.json({ message: "This username already exists" });
    }

    const existingEmail = await getUserByEmailDB(email);
    console.log(existingEmail);

    if (existingEmail.length > 0) {
      return res.json({
        message: "This Email already exists for another user",
      });
    }

    const hashPassword = await bcrypt.hash(password, saltRounds);
    await insertNewUser(username, email, hashPassword);
    
    res.status(201).json({ message: "Registration Complete!" });
  } catch (err) {
    console.log("Registration Error:", err);
    res
      .status(500)
      .json({ message: "Something went wrong with the server or database." });
  }
};

module.exports = register;
