const { users } = require("../config/db.js");

const getAllUsers = (req, res) => {
  // res.send("<h1>Hi</h1><h2>from server</h2>");
  res.json(users);
};

const getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find((item) => item.id == id);
  if (!user) {
    // res.status(404).json({ message: "user not found" });
    res.sendStatus(404);
    return;
  }
  res.json(user);
};

const searchUser = (req, res) => {
  const { name } = req.query;
  const filterUsers = users.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });

  if (filterUsers.length === 0) {
    res.status(404).json({ message: "no user match your search" });
    return;
  }

  res.json(filterUsers);
};

const addNewUser = (req, res) => {
  const { name, username, email } = req.body;
  const newUser = { name, email, username, id: users.length + 1 };
  users.push(newUser);
  res.json(users);
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, username, email } = req.body;

  const index = users.findIndex((item) => item.id == id);

  if (index === -1) {
    res.status(404).json({ message: "user to update not found" });
    return;
  }

  users[index] = { ...users[index], name, username, email };

  res.json(users);
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((item) => item.id == id);
  if (index === -1) {
    res.status(404).json({ message: "user to delete not found" });
    return;
  }
  users.splice(index, 1);
  res.json(users);
};

module.exports = {
  getAllUsers,
  getUserById,
  searchUser,
  addNewUser,
  updateUser,
  deleteUser,
};
