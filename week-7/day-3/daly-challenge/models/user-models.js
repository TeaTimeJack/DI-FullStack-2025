const db = require("../config/db.js");

const getAllUsersDB = () => {
  return db("users").select(
    "id",
    "email",
    "username",
    "first_name",
    "last_name"
  );
};

const getUserByUsernameDB = (username) => {
  return db("users")
    .select("email", "username", "first_name", "last_name")
    .where({ username });
};

const insertNewUser = (email, username, first_name, last_name) => {
  return db("users").insert({ email, username, first_name, last_name });
};

module.exports = {
  getAllUsersDB,
  getUserByUsernameDB,
  insertNewUser,
};
