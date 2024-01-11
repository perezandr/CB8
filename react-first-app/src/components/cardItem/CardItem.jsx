import "./index.css";

const CardItem = ({ cardItemMock }) => {
  // il codice JSX va espresso SEMPRE come unica espressione
  // ovvero dentro parentesi tonde
  const onHandleClick = (event) => {
    console.log(event);
    event.target.parentElement.style.transform = "rotate(-45deg)";
  };

  return (
    <div className="CardItem" onClick={onHandleClick}>
      <img src={cardItemMock.imgUrl} alt={cardItemMock.title} />
      <div className="CardItem_text">
        <h3>{cardItemMock.title}</h3>
        <p>{cardItemMock.content}</p>
      </div>
    </div>
  );
};
//   Le parentesi graffe servono a JSX per prendere come valore di
//   attributi/contenuto delle variabili o entità JS.

export default CardItem;
