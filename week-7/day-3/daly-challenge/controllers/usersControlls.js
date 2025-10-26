const {
  getAllUsersDB,
  getUserByUsernameDB,
} = require("../models/user-models.js");

const getAllUsers = (req, res) => {
  // res.json(users);
  getAllUsersDB()
    .then((rows) => {
      res.json(rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ message: "somthing went wrong" });
    });
};

const getUsersByUsername = (req, res) => {
  const { username } = req.params;
  getUserByUsernameDB(username)
    .then((rows) => {
      if (rows.length === 0) {
        res.status(404).json({
          message: "This UserName is not found in any of the Users...",
        });
      } else {
        res.json(rows);
      }
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Something went wrong with the server or database." });
    });
};

module.exports = {
  getAllUsers,
  getUsersByUsername,
};
