import dotenv from "dotenv";
import knex from "knex";
import { Pool } from "pg";
dotenv.config();

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

const pool = new Pool({
  host: PGHOST,
  port: PGPORT,
  user: PGUSER,
  database: PGDATABASE,
  password: PGPASSWORD,
  ssl: { rejectUnauthorized: false },
});

const result = await pool.query("select * from products where id=$1", [11]);
console.log(result.rows);

// try {
//   const { rows } = await db.raw(
//     "select name, price from products where price=? or name=?",
//     [300, 'Product 300']
//   );
//   console.log(rows);
// } catch (error) {
//   console.error(error);
// }

/** select */
// const rows = await db("products")
//   .select("name", "price", "id")
//   .where({ id: 2 });
// console.log(rows);
// db("products")
//   .select("name", "price", "id")
//   .where({ id: 2 })
//   .then((rows) => echo(rows));

//   function echo(data){
//     console.log(data);

//   }

/** insert */
// const rows = await db("products").insert(
//     [
//   { name: "iWatch16", price: 444 },
//   { name: "iCar", price: 777 },
//     ], ["id"]
// );
// console.log(rows);

// const rows = await db("products")
//   .update({ name: "Samsung 23", price: 999999 }, ["*"])
//   .where({ id: 25 });
// console.log(rows);
