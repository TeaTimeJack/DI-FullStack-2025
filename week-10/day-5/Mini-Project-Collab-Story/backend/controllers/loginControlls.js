
const { getUserByUsernameDB } = require("../models/user-models.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const tryLogin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const existingUsers = await getUserByUsernameDB(username);//need to stop seraching as it finds the first match - then will return a value and not an arry of 1
    if (existingUsers.length === 0) {
      res.json({ message: "This Username does not exist!" });
    }
    const isMatch = await bcrypt.compare(password, existingUsers[0].password_hash)

    if (!isMatch) {
      return res.status(401).json({ message: "Your password is incorrect - try again." })
    }
    
    const accessToken = jwt.sign({userInfo: existingUsers[0]}, process.env.TOKEN_SECRET,{
      expires:"15m",
    })
    // LEARN AND MAKE REFFRESH TOKENS!
    const refreshToken = jwt.sign(
      { userInfo: existingUsers[0] },
      process.env.REFRESH_SECRET,
      { expiresIn: "7d" },
      )

    res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: true })

    res.status(200).json({
      message: "Log in Successful!",
      userInfo: existingUsers[0],
      token: accessToken
    });
    
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({
      message: "Something went wrong with the server or database.",
    });
  }
};


module.exports = {
  tryLogin,
};
