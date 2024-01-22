const createCustomEl = (type, className) => {
  const element = document.createElement(type);
  if (className) {
    element.className = className;
  }
  return element;
};

import { httpGet } from "./modules/http.js";

const navBar = () => {
  const section = createCustomEl("nav", "top-nav");

  const logoImg = createCustomEl("img", "logo");
  logoImg.src =
    "https://uxwing.com/wp-content/themes/uxwing/download/controller-and-music/play-button-red-icon.png";
  logoImg.alt = "logo";

  const searchInput = createCustomEl("input", "searchbar");
  searchInput.placeholder = "Search";

  const inputMenu = createCustomEl("input");
  inputMenu.type = "checkbox";
  inputMenu.setAttribute("id", "menu-toggle");

  const menuButtonContainer = createCustomEl("label", "menu-button-container");
  menuButtonContainer.setAttribute("for", "menu-toggle");

  const menuButton = createCustomEl("div", "menu-button");

  menuButtonContainer.appendChild(menuButton);

  const menu = createCustomEl("ul", "menu");
  const elOne = createCustomEl("li");
  elOne.textContent = "Upcoming";
  const elTwo = createCustomEl("li");
  elTwo.textContent = "Chose for you";
  const elThree = createCustomEl("li");
  elThree.textContent = "Rewatch";
  const elFour = createCustomEl("li");
  elFour.textContent = "Your profile";
  menu.append(elOne, elTwo, elThree, elFour);

  section.append(logoImg, searchInput, inputMenu, menuButtonContainer, menu);

  return section;
};

const heroSection = async () => {
  const imageList = await httpGet("/movie/popular");

  const randomIndex = Math.floor(Math.random() * imageList.results.length);
  const randomImage = imageList.results[randomIndex];

  const section = createCustomEl("section", "hero");
  const heroOverlay = createCustomEl("div", "hero-overlay");
  const heroImg = createCustomEl("img", "hero-img");

  heroImg.src = `https://image.tmdb.org/t/p/w1280${randomImage.backdrop_path}`;
  heroImg.alt = randomImage.title;

  const heroTitle = createCustomEl("h1", "title");
  heroTitle.textContent = randomImage.title;

  const heroButtonsWrapper = createCustomEl("div", "hero-buttons-wrapper");

  const playButton = createCustomEl("button", "play");
  playButton.textContent = "Watch now";
  const addButton = createCustomEl("button", "add");
  addButton.textContent = "+";

  heroButtonsWrapper.append(playButton, addButton);
  section.append(heroOverlay, heroImg, heroTitle, heroButtonsWrapper);

  return section;
};

const movieData = await httpGet("/movie/popular");
const genreData = await httpGet("/genre/movie/list");

const sortedMovieObject = {};

const allGenresNames = genreData.genres.map((genre) => genre.name);

allGenresNames.forEach((element) => {
  sortedMovieObject[element] = [];
});

const getGenreName = (genreId) => {
  const matchingGenre = genreData.genres.find((genre) => genre.id === genreId);
  return matchingGenre.name;
};

movieData.results.forEach((movie) => {
  const movieGenres = movie.genre_ids.map((id) => getGenreName(id));

  movieGenres.forEach((genre) => {
    sortedMovieObject[genre].push({
      id: movie.id,
      title: movie.title,
      genres: movieGenres,
      image: movie.backdrop_path,
    });
  });
});

const cardElGen = (movie) => {
  const imageEl = document.createElement("img");

  imageEl.className = "card-item";
  imageEl.src = `https://image.tmdb.org/t/p/w500${movie.image}`;
  imageEl.alt = movie.title;
  imageEl.id = movie.id;
  imageEl.addEventListener("click", () => {
    const id = movie.id;
    window.location.href = `movie.html?id=${id}`;
  });

  return imageEl;
};

const createCardListGenerator = () => {
  const allDivs = Object.keys(sortedMovieObject).map((key) => {
    if (sortedMovieObject[key].length < 1) {
      return;
    }

    const listContainer = createCustomEl("div", "list-container");
    const listContainerTitle = createCustomEl("h3", "list-title");

    const cardList = createCustomEl("div", "card-list");
    const cardContent = sortedMovieObject[key].map((movie) => {
      return cardElGen(movie);
    });

    cardList.append(...cardContent);

    listContainerTitle.textContent = key;
    listContainer.append(listContainerTitle, cardList);
    return listContainer;
  });

  return allDivs.filter((element) => element !== undefined);
};

document.body.append(
  navBar(),
  await heroSection(),
  ...createCardListGenerator()
);
