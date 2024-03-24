require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Todo = require("./models/todos");
const User = require("./models/users");

const PORT = 8000;

const app = express();
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL);
app.use(express.json());

db.on("error", (err) => console.error(err));
db.once("open", () => console.log("Connected to database"));

//Authentication Middleware
const authenticationToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(401).json({ message: "Use a valid token" });
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err)
        return res
          .status(403)
          .json({ message: "You do not have access rights." });
      req.user = user;
      next();
    });
  }
};

//Login
app.post("/login", async (req, res) => {
  const user = await User.findOne({
    username: req.body.username,
  });

  if (user === null) {
    return res.status(400).json({ message: "User not found." });
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = jwt.sign(
        { username: user.username },
        process.env.ACCESS_TOKEN_SECRET
      );

      res.json({ accessToken });
    }
  } catch (error) {
    res.json({ message: "You don't have the authorisation." });
  }
});

//User registration
app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    });

    const newUser = await user.save();
    res.status(201).json({ message: "Registration complete!", user: newUser });
  } catch (error) {
    res.status(500).json({
      message: "There are some problem with the user registration...",
    });
  }
});

//CRUD methods
app.post("/todos", authenticationToken, async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    created_at: req.body.created_at,
    complete: req.body.complete,
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json({ newTodo });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete("/todos/:id", authenticationToken, async (req, res) => {
  try {
    if (req.params.id === "complete") {
      await Todo.deleteMany({ complete: true });
      res.status(201).json({ message: "Removed completed tasks" });
    } else if (req.params.id === "all") {
      await Todo.deleteMany();
      res.status(201).json({ message: "Todo-List cleared" });
    } else {
      await Todo.findByIdAndDelete(req.params.id);
      res.status(201).json({ message: "Task removed" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.put("/todos/:id", authenticationToken, async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      res.status(404).json({ message: "Task not found" });
    } else {
      const { title, complete } = req.body;

      if (title !== undefined) {
        todo.title = title;
      }

      if (complete !== undefined) {
        todo.complete = complete;
      }

      await todo.save();
      res.status(201).json({ message: "Task modified" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get("/todos/:id", authenticationToken, async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get("/todos", authenticationToken, async (req, res) => {
  const { page = 1, limit = 5 } = req.query;

  try {
    const todos = await Todo.find()
      .limit(limit * 1)
      .skip((page > 0 ? page - 1 : 0) * limit)
      .exec();

    const count = await Todo.countDocuments();
    res.json({
      todos,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
