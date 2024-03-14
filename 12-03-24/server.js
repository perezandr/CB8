const express = require("express");
const bodyParser = require("body-parser");
const bookRoutes = require("./routes/books");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const bookArray = [
  { title: "Dune", author: "Frank Herbert" },
  { title: "Foundation", author: "Isaac Asimov" },
  { title: "Neuromancer", author: "William Gibson" },
  { title: "The War of the Worlds", author: "H.G. Wells" },
  { title: "Snow Crash", author: "Neal Stephenson" },
];

const addedBooks = [];

app.use(bookRoutes);

app.get("/books", (req, res) => {
  const allBooks = [...bookArray, ...addedBooks];
  const bookList = allBooks.map(
    (book) => `<li>${book.title} by ${book.author} </li>`
  );
  res.send(
    `
    <h2>Your library</h2>
    <a href="/"><button>Homepage</button></a>
    </br>
    </br>
    <ul>${bookList}</ul>
  `
  );
});

app.post("/books", (req, res) => {
  const newBook = {
    title: req.body.title,
    author: req.body.author,
  };
  addedBooks.push(newBook);
  res.redirect("/books");
});

app.get("/", (req, res) => {
  res.send(`
  <h1>Welcome to the Online Library</h1>
  <a href="/add-book"><button>Add a new book</button></a>
  `);
});

app.listen(3000);
