import styles from "./index.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`book/${inputText}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.InputBar}
          type="text"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          placeholder="Search your book..."
        />
      </form>
    </div>
  );
};

export default SearchBar;
