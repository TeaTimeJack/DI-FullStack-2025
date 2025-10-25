const users = require("../config/userData.js");

const getAllUsers = (req, res) => {
  res.json(users);
};

const getUsersById = (req, res) => {
  const { id } = req.params;
  const userIdIndex = users.findIndex((user) => user.id == id);
  if (userIdIndex === -1) {
    res
      .status(404)
      .json({ messege: "This ID is not found in any of the Users..." });
  } else {
    res.json(users[userIdIndex]);
  }
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
  getUsersById,
  updateUserById,
};
