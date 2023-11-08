console.log("***Esercizio 1***");

const sum = (x, y, z) => x + y + z;

const sub = (x, y, z) => x - y - z;

const mul = (x, y, z) => x * y * z;

const div = (x, y, z) => {
  if (y === 0 || z === 0) {
    return "Non puoi dividere per zero";
  } else {
    return x / y / z;
  }
};

const calculator = (operator, x, y, z) => operator(x, y, z);

console.log(calculator(sum, 1, 2, 3));
console.log(calculator(sub, 1, 2, 3));
console.log(calculator(mul, 1, 2, 3));
console.log(calculator(div, 10, 0, 0));

console.log("***Esercizio 2***");

const ecommerceProducts = [
  //creati con ChatGpt
  {
    id: 1,
    name: "Smart Garden",
    imageAddress: "https://example.com/smartgarden.jpg",
    description: "A self-sustaining indoor garden ",
    price: 149.99,
  },
  {
    id: 2,
    name: "Virtual Reality Headset",
    imageAddress: "https://example.com/vrheadset.jpg",
    description: "Immerse yourself in a world of virtual adventures.",
    price: 299.99,
  },
  {
    id: 3,
    name: "Language-Translating Earpiece",
    imageAddress: "https://example.com/earpiece.jpg",
    description: "Speak any language.",
    price: 199.99,
  },
  {
    id: 4,
    name: "Holographic Projector",
    imageAddress: "https://example.com/holographicprojector.jpg",
    description: "Turn any room into a 3D holographic display.",
    price: 499.99,
  },
  {
    id: 5,
    name: "Smart Mirror",
    imageAddress: "https://example.com/smartmirror.jpg",
    description:
      "A mirror that displays weather, news, and your fitness stats.",
    price: 179.99,
  },
];

console.log("---forEach()---"); //Itera la callback su ogni elemento dell'array, senza ritornare valori. NON crea un nuovo array.

ecommerceProducts.forEach((product) =>
  console.log(product.name + " --- " + product.price)
);

console.log("---map()---"); //Crea un nuovo array con le modifiche specificate nella callback.

const mapProduct = ecommerceProducts.map((product) =>
  product.price >= 300 ? product : null
);
console.log(mapProduct);

console.log("---filter()---");

console.log(ecommerceProducts.filter((product) => product.price >= 200));

console.log("***Esercizio 3***");

const array1 = [2, 36, 75, 37, 71, 31, 3, 85, 33, 46]; //moltiplicare ogni elemento per 2 //filtrare e tenere solo i numeri >10
const array2 = [8, 65, 75, 76, 40, 58, 6, 79, 18, 68]; //aggiungere 5 ad ogni elemento //filtrare e tenere solo i numeri pari

const transformAndFilter = (firstArray, secondArray) => {
  //definisco 'transformAndFilter' e gli passo due parametri
  if (!Array.isArray(firstArray) || !Array.isArray(secondArray)) {
    //Sto verificando se firstArray o secondArray NON sono degli array. 'Is firstArray/secondArray NOT(!) Array?'
    return "Entrambi gli argomenti devono essere array!"; //Ritorno una stringa come errore
  }
  let result1 = firstArray // mappo e filtro array1 e salvo il risultato in una variabile
    .map((element) => element * 2)
    .filter((element) => element > 10);
  let result2 = secondArray // mappo e filtro array2 e salvo il risultato in una variabile
    .map((element) => element + 5)
    .filter((element) => element % 2 === 0);
  return { result1, result2 }; //ritorno le due variabili in un oggetto, se non inserisco return il risultato sarà 'undefined'
};

console.log(transformAndFilter(array1, array2));
// console.log(transformAndFilter(1, 2));
