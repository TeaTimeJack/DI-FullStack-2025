const db = require("../config/db.js");

const getAllUsersDB = () => {
  return db("users").select("id", "username", "email", "password_hash");
};

const getUserByUsernameDB = (username) => {
  return db("users")
    .select("id", "username", "email", "password_hash")
    .where({ username });
};

const getUserById = (id) => {
  return db("users")
    .select("id", "username", "email", "password_hash")
    .where({ id });
};

const getUserByEmailDB = (email) => {
  return db("users")
    .select("id", "username", "email", "password_hash")
    .where({ email });
};

const insertNewUser = (username, email, password_hash) => {
  return db("users").insert({ email, username, password_hash });
};

module.exports = {
  getAllUsersDB,
  getUserByUsernameDB,
  insertNewUser,
  getUserByEmailDB,
  getUserById,
};
