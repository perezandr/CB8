// DEFINIZIONI

//-------------------Termometro
function hotOrCold(temp) {
  if (temp >= 28) {
    return "Caldo";
  } else if (temp < 28 && temp >= 18) {
    return "Mite";
  } else {
    return "Freddo";
  }
}

// ------------------Object
const myself = {
  firstName: "Andrea",
  secondName: "Perez",
  birthYear: 1992,
  nationality: "Italian",
  "hair-color": "brown",
  age: function () {
    return new Date().getFullYear() - this.birthYear;
  },
};

// -----------------Favourite Films
const favorites = [];

function addToFavorites(film) {
  favorites.push(film);
}

function showFavorites() {
  console.log("******************************"); //Ho inserito questo console.log per avere una migliore legibilità nella console.
  for (let i = 0; i < favorites.length; i++) {
    console.log(favorites[i]);
  }
}

function removeFromFavorites(nome) {
  for (let i = 0; i < favorites.length; i++) {
    if (nome === favorites[i]) {
      favorites.splice(i, 1);
    }
  }
}

// INVOCAZIONI

// ----------------------Termometro
console.log(hotOrCold(18));

// //-----------------------Object
console.log(myself.firstName);
console.log(myself.secondName);
console.log(myself.birthYear);
console.log(myself.nationality);
console.log(myself["hair-color"]);
console.log(myself.age());

console.log(
  "Mi chiamo",
  myself.firstName,
  myself.secondName,
  "sono nato nel",
  myself.birthYear,
  "ed ho",
  myself.age(),
  "anni."
);

// //------------------------Favorites film
addToFavorites("Matrix");
addToFavorites("Clerks");
addToFavorites("Jurassic Park");
addToFavorites("Boris");

showFavorites();

removeFromFavorites("Clerks");

showFavorites();
