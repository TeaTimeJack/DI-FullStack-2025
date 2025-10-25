const db = require("../config/db.js");

const getAllPasswordsDB = () => {
  return db("hashed_passwords").select("id", "username", "password");
};

const getPasswordByUsernameDB = (username) => {
  return db("hashed_passwords")
    .select("username", "password")
    .where({ username });
};

const insertHashPassword = (username, hashPassword) => {
  return db("hashed_passwords").insert({ username, password: hashPassword });
};

module.exports = {
  getPasswordByUsernameDB,
  insertHashPassword,
  getAllPasswordsDB,
};
