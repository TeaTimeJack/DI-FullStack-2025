const express = require("express");

const app = express();

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

// console.log(__dirname+'/public');

/** middleware ->  */
app.use("/", express.static(__dirname + "/public"));

/** body-parser (npm package - express v5) */
app.use(express.json());
// app.use(express.urlencoded())

/**
 * app.get
 * app.post
 * app.put
 */
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
/**
 * CRUD - Read - GET - get all users
 */
app.get("/users", (req, res) => {
  // res.send("<h1>Hi</h1><h2>from server</h2>");
  res.json(users);
});

/**
 * Read - GET - get one user
 * params - /1 /2 /Leanne
 */
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((item) => item.id == id);
  if (!user) {
    // res.status(404).json({ message: "user not found" });
    res.sendStatus(404);
    return;
  }
  res.json(user);
});

/**
 * Read - GET - search for a name
 * query - name=le
 */
app.get("/search", (req, res) => {
  const { name } = req.query;
  const filterUsers = users.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });

  if (filterUsers.length === 0) {
    res.status(404).json({ message: "no user match your search" });
    return;
  }

  res.json(filterUsers);
});

/**
 * Create -Crud - POST - add a new user
 */
app.post("/users", (req, res) => {
  const { name, username, email } = req.body;
  const newUser = { name, email, username, id: users.length + 1 };
  users.push(newUser);
  res.json(users);
});

/**
 * Update - crUd - PUT - update a user
 * id - params
 * name, username, email - body
 */
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, username, email } = req.body;

  const index = users.findIndex((item) => item.id == id);

  if (index === -1) {
    res.status(404).json({ message: "user to update not found" });
    return;
  }

  users[index] = { ...users[index], name, username, email };

  res.json(users);
});

/**
 * Delete - cruD - delete a user
 * id - id of user to delete - params
 */
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((item) => item.id == id);
  if (index === -1) {
    res.status(404).json({ message: "user to delete not found" });
    return;
  }
  users.splice(index, 1);
  res.json(users);
});

/**
 * API -
 */

/**
 * HTTP - methods - CRUD
 * Read - GET - Retrieve data
 * Create - POST - Send/Create new data
 * Update - PUT - Update data
 * Delete - DELETE - Delete
 */

/**
 * RESTfull
 * http://example.com/users GET - get users
 * http://example.com/users POST - create a new user
 * http://example.com/users PUT - Update a user
 * http://example.com/users DELETE - delete a  user
 */
