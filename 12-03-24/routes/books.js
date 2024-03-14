const express = require("express");

const router = express.Router();

router.get("/add-book", (req, res) => {
  res.send(`
    <form action="/books" method="POST">
        <input type="text" placeholder="Title" name="title" />
        <input type="text" placeholder="Author" name="author" />
        <input type="submit" />
    `);
});

module.exports = router;
