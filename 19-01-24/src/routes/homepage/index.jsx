import { useState, useEffect } from "react";
import BookList from "../../components/bookList";
import SearchBar from "../../components/searchBar";
import { HTTP_GET } from "../../utils/http";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    Promise.all([
      HTTP_GET("/subjects/love.json"),
      HTTP_GET("/subjects/war.json"),
      HTTP_GET("/subjects/adventure.json"),
    ]).then((data) => setLists(data));
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/copyright");
  };

  return (
    <div className={styles.Homepage}>
      <div className={styles.SearchWrapper}>
        <SearchBar />
        <button onClick={handleClick}>Our copyright policy</button>
      </div>
      {lists.map((list, i) => (
        <BookList
          bookListData={list.works}
          title={list.name.toUpperCase()}
          key={i}
        />
      ))}
    </div>
  );
}
