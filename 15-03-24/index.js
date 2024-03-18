const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let products = require("./data.json");

//READ
app.get("/products", (req, res, next) => {
  res.json(products);
});

//CREATE
app.post("/products", (req, res, next) => {
  const body = req.body;

  if (
    body.id &&
    body.name &&
    body.brand &&
    body.price &&
    body.description &&
    body.image
  ) {
    products.push(body);
    res.status(201).send("Product added!");
  } else {
    res.status(400).send(`You must add more informations`);
  }
});

//UPDATE
app.put("/products/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const body = req.body;
  const index = products.findIndex((product) => product.id === id);

  if (index === -1) {
    res.status(400).send("Product not found");
  } else {
    products[index] = body;
    res.send("Product modified");
  }
});

//DELETE
app.delete("/products/:id", (req, res, next) => {
  const id = Number(req.params.id);

  products = products.filter((product) => product.id !== id);
  res.send(`Product deleted`);
});

app.get("/", (req, res, next) => {
  res.send("<h1>Ecommerce</h1>");
});

app.listen(PORT);
