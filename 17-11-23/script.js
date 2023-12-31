//Esercizio 1 & 3
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
    popup.style.display = "none";
    bgImg.style.display = "block";
  });

  btnN.addEventListener("click", () => {
    window.location.href = "http://www.google.com";
  });

  return popup;
};

const hideBgImg = () => {
  bgImg.style.display = "none";
};

setTimeout(() => {
  popupFunction();
  hideBgImg();
}, 3500);

// Esercizio 2

fetch("https://dummyjson.com/products")
  .then((response) => response.json()) //estraggo i dati dall'API tramite JSON
  .then((data) => {
    console.log(data.products.filter((product) => product.price < 50));
  });
