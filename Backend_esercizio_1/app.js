const express = require("express");
const app = express();
const { films } = require("./data");
const PORT = 8000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/homepage.html");
});

app.get("/api/catalogo", (req, res) => {
  res.json(films);
});

app.get("/api/catalogo/genre", (req, res) => {
  const newFilm = films.map((film) => {
    const { title, genre } = film;
    return { title, genre };
  });
  res.json(newFilm);
});

app.get("/api/catalogo/anno", (req, res) => {
  const newFilm = films.map((film) => {
    const { title, year } = film;
    return { title, year };
  });
  res.json(newFilm);
});

app.get("/api/catalogo/:filmId", (req, res) => {
  const { filmId } = req.params;

  const singleFilm = films.find((film) => film.id === Number(filmId));
  if (!singleFilm) {
    return res.status(404).send("Film non trovato");
  }
  return res.json(singleFilm);
});

app.get("/api/v1/film", (req, res) => {
  const { search, limit } = req.query;
  let filterFilm = [...films];

  if (search) {
    filterFilm = filterFilm.filter((film) => {
      return film.title.match(search);
    });
  }

  if (limit) {
    filterFilm = filterFilm.slice(0, limit);
  }
  if (filterFilm.lenght < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(filterFilm);
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/page404.html");
});

app.listen(PORT, () => {
  console.log("Server attivo");
});

// search by specific title
app.get("/posts", (req, res) => {
  const { search, limit } = req.query;
  console.log(req.query);
  let filterPosts = [...posts];

  if (search) {
    const searchLowerCase = search.toLowerCase();
    const searchUpperCase = search.toUpperCase();
    filterPosts = filterPosts.filter((post) => {
      const titleLowerCase = post.title.toLowerCase();
      return (
        titleLowerCase.startsWith(searchLowerCase) ||
        titleLowerCase.startsWith(searchUpperCase)
      );
    });
  }

  if (limit) {
    filterPosts = filterPosts.slice(0, limit);
  }

  if (filterPosts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }

  res.status(200).json(filterPosts);
});
