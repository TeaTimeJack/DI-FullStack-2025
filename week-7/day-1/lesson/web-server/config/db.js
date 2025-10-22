const dotenv = require("dotenv");
const knex = require("knex");
dotenv.config()

const { PGDATABASE, PGHOST, PGPASSWORD, PGUSER, PGPORT } = process.env;
console.log(PGDATABASE, PGHOST, PGPASSWORD, PGUSER, PGPORT);

const db = knex({
  client: "pg",
  connection: {
    host: PGHOST,
    port: PGPORT,
    user: PGUSER,
    database: PGDATABASE,
    password: PGPASSWORD,
    ssl: { rejectUnauthorized: false },
  },
});

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
];

const products = [
  { name: "iPhone16", price: "800" },
  { name: "iPad17", price: "999" },
];

module.exports = {
  users,
  products,
  db,
};
