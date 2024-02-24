const express = require("express");
const bodyParser = require("body-parser");

const authorize = require("./auth");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.post("/mostra-dati", (req, res) => {
  const { user } = req.body;
  const { password } = req.body;

  if (user && password) {
    return res
      .status(200)
      .send(`Benvenuto ${user}, la tua password è: ${password}`);
  }
  res.status(400).send("Per favore inserisci username e password");
});

app.get("/dashboard", authorize, (req, res) => {
  res.send("Dashboard");
});

app.listen(PORT, () => {
  console.log("Server attivo");
});
