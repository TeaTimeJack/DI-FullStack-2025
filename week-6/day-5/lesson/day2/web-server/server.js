const express = require("express");
const usersRouter = require("./routes/usersRoute.js");
const productsRouter = require('./routes/productsRoute.js')
const app = express();

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

/** middleware ->  */
app.use("/", express.static(__dirname + "/public"));

/** body-parser (npm package - express v5) */
app.use(express.json());
// app.use(express.urlencoded())

app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);

/**
 *  server
 *    |_ config - connection to databases
 *    |_ models - queries to database/files
 *    |_ controllers - function implements code - request, response
 *    |_ routes - route for api
 *    |_ middlewares - function - req, res - auth, log
 */
