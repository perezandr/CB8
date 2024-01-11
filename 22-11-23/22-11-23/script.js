//Esercizio 1 -----------------------------------------
// Sulla base della lezione del giorno, effettuare una chiamata
// al seguente endpoint e richiedere una lista di immagini.
// Fare quindi il console log che presenti i soli valori contenuti
// dentro la chiave `download_url`.  Attenzione, usare Async/Await.

//creo la funzione getImg per eseguire la fetch usando async e await

const getImg = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

// getImg("https://picsum.photos/v2/list").then((data) => {
//   const images = data.map((image) => console.log(image.download_url));

//   return images;
// });

// ESERCIZIO 2 e 3------------------------------------
// Creare una funzione che renderizzi una immagine e un testo.
// Una volta creata la funzione, renderizzare i dati del seguente oggetto

const cE = (type) => document.createElement(type);

//salvo i valori della fetch in una variabile globale
const apiList = await getImg("https://picsum.photos/v2/list");

//Il parametro di imgAndText è objectImage, il quale
// non ha alcun valore finchè è usato nella definizione della funzione.
//Nel momento in cui invoco la funzione imgAndText (riga 56) gli dovrò
//passare un argomento (image), il quale rappresenta l'elemento dell'array
//apiList. Su questo elemento (e tutti gli altri) verrà eseguita la funzione
//imgAndText.
const imgAndText = (objectImage) => {
  const wrapper = cE("div");
  const imgEl = cE("img");
  const textEl = cE("h2");

  wrapper.className = "main-wrapper";
  imgEl.className = "main-image";
  textEl.className = "main-text";
  imgEl.src = objectImage.download_url;
  textEl.textContent = objectImage.author;

  wrapper.append(imgEl, textEl);
  return wrapper;
};

//Uso .map per applicare ad ogni elemento dell'array apiList la funzione imgandText
//non uso .forEach perchè .map crea un nuovo array.
//Salvo tutto nell'array allWrapper
const allWrappers = apiList.map((image) => {
  return imgAndText(image);
});
console.log(allWrappers);
//uso lo spread operator per appendere singolarmente tutti gli
//oggetti dell'array allWrappers al body
document.body.append(...allWrappers);


//alternativa  più semplice (sistemare forse perchè copiata dalla lezione)
getImg().then(data) => data.map((x)=> document.body.append(imgAndText(x))) ;