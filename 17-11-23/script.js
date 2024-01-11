//Esercizio 1
const cE = (type) => document.createElement(type);

const bg = cE("main");
const bgImg = cE("div");

bgImg.className = "background";
bg.appendChild(bgImg);
document.body.appendChild(bg);

const popupFunction = () => {
  const popup = cE("div");
  const popupText = cE("p");
  const btnWrapper = cE("div");
  const btnY = cE("button"); //chiude il popup
  const btnN = cE("button"); //fa redirect a google.com

  popup.className = "main-popup";
  popupText.className = "main-text";
  btnWrapper.className = "button-wrapper";
  btnY.className = "yes";
  btnN.className = "no";

  popupText.textContent = "Sei maggiorenne?";
  btnY.textContent = "Si";
  btnN.textContent = "No";

  btnWrapper.append(btnY, btnN);
  popup.append(popupText, btnWrapper);
  bg.appendChild(popup);

  btnY.addEventListener("click", () => {
    hideElement(popup, true);
    hideElement(bgImg, false);
  });

  btnN.addEventListener("click", () => {
    window.location.href = "http://www.google.com";
  });

  return popup;
};

const hideElement = (element, hide) => {
  if (hide === true) {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
};

setTimeout(() => {
  popupFunction();
  hideElement(bgImg, true);
}, 3500);

// Esercizio 2

fetch("https://dummyjson.com/products")
  .then((response) => response.json()) //estraggo i dati dall'API tramite JSON
  .then((data) => {
    console.log(data.products.filter((product) => product.price < 50));
  });
