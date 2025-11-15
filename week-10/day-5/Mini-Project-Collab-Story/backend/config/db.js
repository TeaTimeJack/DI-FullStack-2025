const dotenv = require("dotenv");
const knex = require("knex");
dotenv.config()

const { PGDATABASE, PGHOST, PGPASSWORD, PGUSER, PGPORT } = process.env;
// console.log(PGDATABASE, PGHOST, PGPASSWORD, PGUSER, PGPORT);

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


module.exports = db;
