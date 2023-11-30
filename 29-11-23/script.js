import { httpGET } from "./modules/http.js";
import {
  cardElGen,
  cardsListElGen,
  listsContainerElGen,
} from "./modules/components.js";

// __________________________________INIZIO ESERCITAZIONE
// ESERCIZIO 1

const cE = (type, className) => {
  const element = document.createElement(type);
  if (className) {
    element.className = className;
  }
  return element;
};

const navBar = document.querySelector(".navbar");

const searchBar = () => {
  const wrapper = cE("div", "search");

  const imgLogo = cE("img");
  imgLogo.src =
    "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png";
  imgLogo.alt = "netflix-clone-logo";

  const searchInput = cE("input");
  searchInput.placeholder = "Search";

  wrapper.append(imgLogo, searchInput);

  return wrapper;
};

const linkList = () => {
  const wrapper = cE("div", "links");
  const list = cE("ul", "links-list");

  const listElOne = cE("li");
  const listElTwo = cE("li");
  listElOne.textContent = "TV Shows";
  listElTwo.textContent = "Movies";

  const labelEl = cE("label");
  labelEl.textContent = "Categories";
  const selectEL = cE("select");
  const optionEl = cE("option");

  optionEl.setAttribute("value", "");
  selectEL.setAttribute("name", "categories");
  selectEL.setAttribute("id", "categories");
  labelEl.setAttribute("for", "categories");

  selectEL.appendChild(optionEl);
  list.append(listElOne, listElTwo, labelEl, selectEL);
  wrapper.appendChild(list);

  return wrapper;
};

navBar.append(searchBar(), linkList());

const modalCardPromise = httpGET("/tv/top_rated").then((data) => {
  const listContainerEl = listsContainerElGen("Top Rated");
  const cardsListEl = cardsListElGen();

  data.results.map((serie) => cardsListEl.append(cardElGen(serie)));

  listContainerEl.append(cardsListEl);

  return listContainerEl;
});

// ESERCIZIO 2
const modalGenerator = () => {
  const modalWrapper = cE("div", "modal");
  const modalTitle = cE("h1", "modal-title");
  const modalPosterWrapper = cE("div", "poster-wrapper");
  const modalButton = cE("button", "modal-button");

  modalTitle.textContent = "Chosen for you";
  modalButton.textContent = "Return Home";

  modalCardPromise.then((modalCard) => {
    modalPosterWrapper.append(modalCard);
  });

  modalWrapper.append(modalTitle, modalPosterWrapper, modalButton);

  modalButton.addEventListener("click", () => {
    modalWrapper.style.display = "none";
  });

  return modalWrapper;
};

setTimeout(() => {
  document.body.append(modalGenerator());
}, 3500);

// __________________________________FINE ESERCITAZIONE

const asyncListContainerElGen = async (endpoint, title) => {
  const data = await httpGET(endpoint);
  const listContainerEl = listsContainerElGen(title);
  const cardsListEl = cardsListElGen();

  data.results.map((serie) => cardsListEl.append(cardElGen(serie)));
  listContainerEl.append(cardsListEl);

  return listContainerEl;
};

const mainSectionEl = document.querySelector(".main");

// 1 STEP
// httpGET("/tv/top_rated").then((data) => {
//   const listContainerEl = listsContainerElGen("Top Rated");
//   const cardsListEl = cardsListElGen();

//   data.results.map((serie) => cardsListEl.append(cardElGen(serie)));

//   listContainerEl.append(cardsListEl);
//   mainSectionEl.append(listContainerEl);
// });

// httpGET("/tv/popular").then((data) => {
//   const listContainerEl = listsContainerElGen("Popular");
//   const cardsListEl = cardsListElGen();

//   data.results.map((serie) => cardsListEl.append(cardElGen(serie)));

//   listContainerEl.append(cardsListEl);
//   mainSectionEl.append(listContainerEl);
// });

// 2 STEP
// asyncListContainerElGen("/movie/upcoming", "Movies - Upcoming").then(
//   (element) => mainSectionEl.append(element)
// );

// asyncListContainerElGen("/movie/now_playing", "Movies - Now Playing").then(
//   (element) => mainSectionEl.append(element)
// );

// asyncListContainerElGen("/tv/top_rated", "Serie Tv - Top Rated").then(
//   (element) => mainSectionEl.append(element)
// );
// asyncListContainerElGen("/tv/popular", "Serie Tv - Popular").then((element) =>
//   mainSectionEl.append(element)
// );

// 3 STEP
Promise.all([
  asyncListContainerElGen("/movie/upcoming", "Movies - Upcoming"),
  asyncListContainerElGen("/movie/now_playing", "Movies - Now Playing"),
  asyncListContainerElGen("/tv/top_rated", "Serie Tv - Top Rated"),
  asyncListContainerElGen("/tv/popular", "Serie Tv - Popular"),
]).then((elements) => elements.map((el) => mainSectionEl.append(el)));
