import CardItem from "./components/cardItem/CardItem";
import "./App.css";

const cardListMock = [
  {
    id: 1,
    imgUrl: "https://picsum.photos/200/200?1",
    title: "Ortottori",
    content: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    imgUrl: "https://picsum.photos/200/200?2",
    title: "Borlani",
    content: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 3,
    imgUrl: "https://picsum.photos/200/200?3",
    title: "Cistifotteri",
    content: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 4,
    imgUrl: "https://picsum.photos/200/200?4",
    title: "Gurp-Armond",
    content: "Lorem ipsum dolor sit amet.",
  },
];

// const mappedCardListItems = cardListMock.map((card) => (
//   <CardItem cardItemMock={card} />
// ));

function App() {
  // App() è il componente
  return (
    //Questo è il codice JSX
    <div className="App">
      <h1>Hello World!</h1>
      <div className="cards-list">
        {cardListMock.map((card) => (
          <CardItem cardItemMock={card} key={card.id} />
        ))}
        {/* {mappedCardListItems} ////questo metodo è peggiore */}
      </div>
    </div>
  );
}
// nei componenti come CardItem non possiamo aggiungere //attributi come
// negli elementi html.Possiamo però inserire le proprietà (props).In
// questo caso CardItem ha come prop la variabile cardItemMock che ha come
// valore l'oggetto di linea 5-8
export default App;
