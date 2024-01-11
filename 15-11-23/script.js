const cE = (type) => document.createElement(type);

//Creo il main
const mainWrapper = cE("main");
document.body.appendChild(mainWrapper);
//Creo il nav
const navSection = cE("nav");
const bigTitle = cE("h1");
const navButtons = cE("div");
const searchButton = cE("button");
const chartButton = cE("button");

navSection.className = "navigation";
navButtons.className = "wrapNavButtons";
searchButton.className = "search";
chartButton.className = "chart";

bigTitle.textContent = "Find Best Droids";
searchButton.textContent = "🔍";
chartButton.textContent = "💸";

mainWrapper.appendChild(navSection);
navSection.append(bigTitle, navButtons);
navButtons.append(searchButton, chartButton);

//Creo la navbar superiore
const navBarSup = cE("div");
const buttonOne = cE("button");
const buttonTwo = cE("button");
const buttonThree = cE("button");
const buttonFour = cE("button");
const buttonFive = cE("button");

buttonOne.textContent = "🏠";
buttonTwo.textContent = "🤖";
buttonThree.textContent = "🔩";
buttonFour.textContent = "🦾";
buttonFive.textContent = "⚙️";

const buttons = [buttonOne, buttonTwo, buttonThree, buttonFour, buttonFive];

buttonOne.addEventListener("click", function () {
  navSection.scrollIntoView({ behavior: "smooth" });
});

const buttonsStyle = (allButtons) => {
  allButtons.forEach((btnEl) => {
    btnEl.addEventListener("mouseover", () => {
      btnEl.style.backgroundColor = "sandybrown";
      btnEl.style.color = "white";
      btnEl.style.transform = "scale(1.2)";
    });
    btnEl.addEventListener("mouseout", () => {
      btnEl.style.backgroundColor = "#e5b531";
      btnEl.style.color = "black";
      btnEl.style.transform = "scale(1)";
    });
  });
};

buttonsStyle(buttons);

navBarSup.className = "navBar";

mainWrapper.appendChild(navBarSup);
navBarSup.append(buttonOne, buttonTwo, buttonThree, buttonFour, buttonFive);

//Creo e appendo la roboSection e la titleSection
const roboSection = cE("section");
const titleSection = cE("h3");
const list = cE("div");
roboSection.className = "recommended";
titleSection.textContent = "Recommended 4 you";
titleSection.className = "titleForYou";
list.className = "robo-list";
mainWrapper.append(roboSection);
roboSection.append(titleSection, list);

//definisco la funzione
const roboProdGen = (roboData) => {
  //inserisco il try
  try {
    //Creo gli elementi
    const wrapperEl = cE("div");
    const imgEl = cE("img");
    const textEl = cE("div");
    const priceEl = cE("p");
    const nameEl = cE("h4");
    const buttonHeart = cE("button");
    const buttonPlus = cE("button");
    const rightColumn = cE("div");
    const leftColumn = cE("div");

    //aggiungo una classe agli elementi
    wrapperEl.className = "robo";
    textEl.className = "text";
    buttonHeart.className = "cardbutton";
    buttonPlus.className = "cardbutton";
    rightColumn.className = "columnR";
    leftColumn.className = "columnL";

    //definisco gli attributi src e alt per le img
    imgEl.src = roboData.imageUrl; //i dati saranno presi dagli elementi dell'array mockData
    imgEl.alt = roboData.roboName;

    //aggiungo il testo agli elementi testuali
    priceEl.textContent = roboData.price + " $";
    nameEl.textContent = roboData.roboName;
    buttonHeart.textContent = "🖤";
    buttonPlus.textContent = "➕";

    //appendo gli elementi child ai parenti, parto dal più interno
    rightColumn.append(buttonPlus);
    leftColumn.append(priceEl, nameEl);
    textEl.append(leftColumn, rightColumn);
    wrapperEl.append(buttonHeart, imgEl, textEl);

    //definisco cosa deve ritornare la funzione
    return wrapperEl;
    //inserisco il catch
  } catch (error) {
    console.error("Qualcosa non va nel codice - Nome dell'errore:", error.name);
  } finally {
    console.log("Finalmente");
  }
};

const mockData = [
  {
    id: 1,
    roboName: "Giongio",
    price: 300,
    imageUrl: "https://robohash.org/Giongio",
  },
  {
    id: 2,
    roboName: "Sir Pentecoste",
    price: 666,
    imageUrl: "https://robohash.org/Sir_Pentecoste",
  },
  {
    id: 3,
    roboName: "Frengo",
    price: 123,
    imageUrl: "https://robohash.org/Frengo",
  },
  {
    id: 4,
    roboName: "Baleonora",
    price: 456,
    imageUrl: "https://robohash.org/Baleonora",
  },
  {
    id: 5,
    roboName: "Ninni Pottolengo",
    price: "007",
    imageUrl: "https://robohash.org/Ninni",
  },
  {
    id: 6,
    roboName: "Il laido Giorgione",
    price: 883,
    imageUrl: "https://robohash.org/Il",
  },
  {
    id: 7,
    roboName: "Zia Carmela",
    price: "Poco",
    imageUrl: "https://robohash.org/Zia Carmela",
  },
  {
    id: 8,
    roboName: "JanPierre",
    price: 3.666,
    imageUrl: "https://robohash.org/JanPierre",
  },
  {
    id: 9,
    roboName: "Tuo Cugino",
    price: "Gratis",
    imageUrl: "https://robohash.org/tuo",
  },
  {
    id: 10,
    roboName: "Satana",
    price: 666,
    imageUrl: "https://robohash.org/Satana",
  },
];

mockData.forEach((robo) => list.appendChild(roboProdGen(robo)));
