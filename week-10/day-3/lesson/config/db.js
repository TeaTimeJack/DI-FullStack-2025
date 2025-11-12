import knex from "knex";
import { config } from "dotenv";

config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;

export const dbneon = knex({
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
