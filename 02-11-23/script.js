// // Funzione completa
// function calculator(operation, firstNum, secondNum) {
//   // console.log(value); // Accettato
//   if (operation === "sum") {
//     return firstNum + secondNum;
//   } else if (operation === "sub") {
//     return firstNum - secondNum;
//   } else if (operation === "mult") {
//     return firstNum * secondNum;
//   } else if (operation === "div") {
//     return firstNum / secondNum;
//   } else {
//     return "Non ho capito quale operazione vuoi svolgere";
//   }
// }

// console.log(calculator("sum", 5, 2));
// console.log(calculator("mult", 5, 2));
// console.log(calculator("sub", 51, 20));
// console.log(calculator("pippo", 51, 20));
// let calculatorResult = calculator("sum", 5, 2);
// console.log(calculatorResult);

// Funzione senza argomenti
// function welcomeMessage() {
//   return "Benvenuto! Come stai??";
// }

// console.log(welcomeMessage());

// function getDayStatus(actualHour) {
//   if (actualHour >= 6 && actualHour <= 12) {
//     return "mattino";
//   } else if (actualHour > 12 && actualHour <= 18) {
//     return "pomeriggio";
//   } else if (actualHour > 18 && actualHour <= 24) {
//     return "sera";
//   } else if (actualHour >= 0 && actualHour <= 6) {
//     return "notte";
//   } else {
//     return "Ora fornita non valida";
//   }
// }

// console.log(getDayStatus(5.41));

// OBJECTS IN JS
// const smartphone324 = {
//   title: "Apple Iphone 15",
//   brand: "Apple",
//   color: ["silver", "black"],
//   "price-tot": 1400.0,
// };

// console.log(smartphone324);
// // accesso alla chiave per puntino di congiunzione
// console.log(smartphone324.color);
// // accesso alla chiave per stringa di testo
// console.log(smartphone324["price-tot"]);

// const myDog = {
//   name: "Willy", // proprietà
//   age: 3, // proprietà
//   color: "white", // proprietà
//   "eyes-color": "azure", // proprietà
//   // metodi
//   burk: function () {
//     return "Io sono: " + this.name + " Bauu bauu bauu!";
//   },
// };

// console.log(
//   "Il mio cagnolino si chiama",
//   myDog.name,
//   "il colore dei suoi occhi è",
//   myDog["eyes-color"],
//   "e ogni tanto fa:",
//   myDog.burk()
// );

// const ourConsole = {
//   // ...
//   log: function (arg) {
//     console.log(arg);
//   },
// };

// ourConsole.log("Proviamo questo log");

// SCOPE - accessibilità delle variabili
// let firstVar = "Scope globale";
// let rescueDefVar = "";

// function abc() {
//   // ...
//   let secondVar = "Scope locale - 1 livello - funzione abc";

//   function def() {
//     let thirdVar = "Scope locale - 2 livello - funzione def";
//     rescueDefVar = thirdVar;

//     console.log(firstVar); // Va bene
//     console.log(secondVar); // Va bene
//     console.log(thirdVar); // Va bene
//     // ...
//     return 0;
//   }

//   def(); // Invocazione necessaria per l'esecuzione della funzione def()
// console.log(firstVar); // Va bene
// console.log(secondVar); // va bene
// console.log(thirdVar); // ERRORE - siamo fuori scope

//   return 0;
// }

// abc(); // Invocazione necessaria per l'esecuzione della funzione abc()
// console.log("=======>", rescueDefVar);

// function hotOrCold(temp) {
//     if (temp >= 28) {
//       return "Caldo";
//     } else if (temp < 28 && temp >= 18) {
//       return "Mite";
//     } else {
//       return "Freddo";
//     }
//   }
//   console.log(hotOrCold(20));

// const myself = {
//   firstName: "Andrea",
//   secondName: "Perez",
//   birthYear: 1992,
//   nationality: "Italian",
//   "hair-color": "brown",
//   age: function () {
//     return new Date().getFullYear() - this.birthYear;
//   },
// };

// // console.log(myself.firstName);
// // console.log(myself.secondName);
// // console.log(myself.birthYear);
// // console.log(myself.nationality);
// // console.log(myself["hair-color"]);
// console.log(myself.age());

// console.log(
//   "Mi chiamo",
//   myself.firstName,
//   myself.secondName,
//   "sono nato nel",
//   myself.birthYear,
//   "ed ho",
//   myself.age(),
//   "anni."
// );

const favorites = [];

function addToFavorites(film) {
  favorites.push(film);
}

addToFavorites("Matrix");
addToFavorites("Clerks");
addToFavorites("Jurassic Park");
addToFavorites("Boris");

function showFavorites() {
  console.log("******************************");
  for (let i = 0; i < favorites.length; i++) {
    console.log(favorites[i]);
  }
}

showFavorites();

function removeFromFavorites(nome) {
  for (let i = 0; i < favorites.length; i++) {
    if (nome === favorites[i]) {
      favorites.splice(i, 1);
    }
  }
}

removeFromFavorites("Jurassic Park");

showFavorites();
