const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Parse JSON bodies
app.use(express.json());

// In-memory users storage
let users = [];
let nextId = 1;

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// GET user by id
app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send({ message: "User not found" });
  res.json(user);
});

// CREATE new user
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  const user = { id: nextId++, name, email };
  users.push(user);
  res.status(201).json(user);
});

// UPDATE user
app.put("/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send({ message: "User not found" });
  const { name, email } = req.body;
  user.name = name !== undefined ? name : user.name;
  user.email = email !== undefined ? email : user.email;
  res.json(user);
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.json({ message: "User deleted" });
});

// Root page
app.get("/", (req, res) => {
  res.send("Simple Node.js CRUD API is running!");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

