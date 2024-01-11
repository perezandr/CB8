const cE = (type) => document.createElement(type);
//---Hero--
const hero = cE("div");
const wrapHero = cE("div");
const heroTitle = cE("h1");
const heroText = cE("p");
const heroButton = cE("button");
//--Gallery--
const gallerySection = cE("div");
const wrapGallery = cE("div");
const wrapGalleryTwo = cE("div");
// const galleryButton = cE("button");
//---
heroTitle.textContent = "Scaccia l'aracnofobia";
heroText.textContent = "Basta un click per superare le proprie paure";
heroButton.textContent = "Click";
// galleryButton.textContent = "Return Home";

//---
document.body.append(hero, gallerySection);
hero.appendChild(wrapHero);
wrapHero.append(heroTitle, heroText, heroButton); //specifico più elementi con .append
//--Gallery--
gallerySection.append(wrapGallery, wrapGalleryTwo);

//---
hero.setAttribute("class", "hero");
gallerySection.setAttribute("class", "gallerySection");
wrapHero.setAttribute("class", "wrap");
heroButton.setAttribute("class", "hero-button");
wrapGallery.setAttribute("class", "wrapGallery");
wrapGalleryTwo.setAttribute("class", "wrapGallery2");
// galleryButton.setAttribute("class", "gallery-button");

function transition() {
  hero.classList.add("invisible-button"); //uso classList.add perchè rende l'effetto più fluido rispetto ad addEventListener
}

heroButton.addEventListener("click", function () {
  console.log("cliccato");
  wrapGallery.style.opacity = 1;
});

heroButton.addEventListener("click", transition);

// ---ImgGenerator

const img1 = {
  id: 1,
  imgUrl: "https://picsum.photos/600/300?random=1",
  altText: "Pic 1",
};
const img2 = {
  id: 2,
  imgUrl: "https://picsum.photos/600/300?random=2",
  altText: "Pic 2",
};
const img3 = {
  id: 3,
  imgUrl: "https://picsum.photos/600/300?random=3",
  altText: "Pic 3",
};

const imageGenerator = (img) => {
  const image = cE("img");
  image.setAttribute("id", img.id);
  image.setAttribute("src", img.imgUrl);
  image.setAttribute("class", "picture");

  return image;
};
const imageList = [
  {
    id: 1,
    imgUrl: "https://picsum.photos/200/200?random=6",
    altText: "Immagine 1",
  },
  {
    id: 2,
    imgUrl: "https://picsum.photos/200/200?random=10",
    altText: "Immagine 2",
  },
  {
    id: 3,
    imgUrl: "https://picsum.photos/200/200?random=9",
    altText: "Immagine 3",
  },
  {
    id: 4,
    imgUrl: "https://picsum.photos/200/200?random=7",
    altText: "Immagine 4",
  },
  {
    id: 5,
    imgUrl: "https://picsum.photos/200/200?random=4",
    altText: "Immagine 5",
  },
  {
    id: 6,
    imgUrl: "https://picsum.photos/200/200?random=3",
    altText: "Immagine 6",
  },
  {
    id: 7,
    imgUrl: "https://picsum.photos/200/200?random=7",
    altText: "Immagine 7",
  },
  {
    id: 8,
    imgUrl: "https://picsum.photos/200/200?random=4",
    altText: "Immagine 8",
  },
  {
    id: 9,
    imgUrl: "https://picsum.photos/200/200?random=2",
    altText: "Immagine 9",
  },
  {
    id: 10,
    imgUrl: "https://picsum.photos/200/200?random=1",
    altText: "Immagine 10",
  },
];

imageList.forEach((img) => wrapGalleryTwo.appendChild(imageGenerator(img)));

wrapGallery.appendChild(imageGenerator(img1));
wrapGallery.appendChild(imageGenerator(img2));
wrapGallery.appendChild(imageGenerator(img3));
