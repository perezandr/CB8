require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Todo = require("./models/todos");

const app = express();
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL);
app.use(express.json());

db.on("error", (err) => console.error(err));
db.once("open", () => console.log("Connected to database"));

app.get("/todos", async (req, res) => {
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

app.get("/todos/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.post("/todos", async (req, res) => {
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

app.delete("/todos/:id", async (req, res) => {
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

app.put("/todos/:id", async (req, res) => {
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

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
