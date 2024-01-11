// PROMPT prende in ingresso (input - da tastiera) una stringa
// let myName = prompt("Come ti chiami?");

// console.log("Benvenuto " + myName + " io sono Javascript :D");

// let myAge = prompt("Quando sei nato? Dimmi solo l'anno");

// console.log(
//   "Quindi hai " + (new Date().getFullYear() - parseInt(myAge)) + " anni!"
// );

// let myAge = prompt("Quanti anni hai?");

// // ISTRUZIONE CONDIZIONALE IF - ELSE IF - ELSE
// if (myAge < 18) {
//   console.log("Sei minorenne, mi dispiace devi uscire!");
// } else if (myAge > 18) {
//   console.log("Sei maggiorenne, prego!");
// } else {
//   console.log("Sei appena maggiorenne, non so se ti faccio entrare ...");
// }

// Trasposizione in Switch dell'IF sopra
// switch (parseInt(myAge)) {
//   case 1:
//     console.log("Sei minorenne, mi dispiace devi uscire!");
//     break; // Esce fuori dallo switch
//   case 2:
//     console.log("Sei minorenne, mi dispiace devi uscire!");
//   // break;
//   case 3:
//     console.log("Sei minorenne, mi dispiace devi uscire!");
//   // break;
//   case 4:
//     console.log("Sei minorenne, mi dispiace devi uscire!");
//   // break;
//   case 5:
//     console.log("Sei minorenne, mi dispiace devi uscire!");
//     break;
//   // ... case n
//   case 17:
//     console.log("Sei minorenne, mi dispiace devi uscire!");
//     break;
//   case 18:
//     console.log("Sei appena maggiorenne, non so se ti faccio entrare ...");
//     break;
//   case 19:
//     console.log("Sei maggiorenne, prego!");
//     break;
//   default:
//     console.log("Hai finito i numeri");
// }

// OPERATORE TERZIARIO
// myAge >= 18
//   ? console.log("Sei maggiorenne")
//   : console.log("Sei minorenne hai appena: " + myAge + " anni");

// let msgRequest = prompt("Ti piace la filatelia?");

// if (msgRequest === "Si" || msgRequest === "si") {
//   console.log("Sei l'ultimo");
// }
// if (msgRequest === "No" || msgRequest === "no") {
//   console.log("Meno male");
// } else if (msgRequest === "Preferisco i giornali d'epoca") {
//   console.log("Cartaccia inutile, W il digitale");
// } else if (msgRequest === "In che anno siamo?") {
//   console.log(new Date().getFullYear());
// } else {
//   console.log("Riformula la domanda, non ho capito");
// }

// BONUS
// function print(arg) {
//   console.log(arg);
// }

// print(222, 55);
