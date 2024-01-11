const animals = ["lepre", "corvo", "serpente"];

animals.push("balena", "tigre", "falco", "polpo", "grillo");

for (let i = 0; i < animals.length; i++) {
  console.log(`${i + 1}: ${animals[i]}`);
  //   // console.log(i + 1 + ": " + animals[i]); //soluzione più brutta
}

// animals.indexOf("lepre");
// console.log(animals);

// if (5 !== "falco") {
//   animals[5] = "ippopotamo";
// } //array replace
