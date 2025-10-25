const users = require("../config/userData.js");
const {
  getAllUsersDB,
  // getUserByIdDB,
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

// const getUsersById = (req, res) => {
//   const { id } = req.params;
//   getUserByIdDB(id)
//     .then((rows) => {
//       // const userIdIndex = users.findIndex((user) => user.id == id);
//       // if (userIdIndex === -1)
//       if (row.length === 0) {
//         res
//           .status(404)
//           .json({ message: "This ID is not found in any of the Users..." });
//       } else {
//         res.json(rows);
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(404).json({ message: "somthing went wrong" });
//     });
// };

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

const updateUserById = (req, res) => {
  const { id } = req.params;
  const { email, username, first_name, last_name } = req.body;
  const userIdIndex = users.findIndex((user) => user.id == id);
  if (userIdIndex === -1) {
    res
      .status(404)
      .json({ messege: "This ID is not found in any of the Users..." });
  } else {
    users[userIdIndex] = {
      ...users[userIdIndex],
      email,
      username,
      first_name,
      last_name,
    };
    res.json(users[userIdIndex]);
  }
};

module.exports = {
  getAllUsers,
  // getUsersById,
  getUsersByUsername,
  updateUserById,
};
