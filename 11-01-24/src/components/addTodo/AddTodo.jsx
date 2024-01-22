import styles from "./index.module.scss";
import { useState } from "react";

const AddTodo = ({ setTodoListData }) => {
  const [inputValue, setInputValue] = useState("Ciao");

  const onHandleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onHandleSubmit = (event) => {
    const newTodo = {
      id: Math.floor(Math.random() * 9999) * new Date(),
      completed: false,
      todo: inputValue,
    };
    event.preventDefault();
    setTodoListData((prev) => [...prev, newTodo]);
  };

  return (
    <div className={styles.AddTodo}>
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={inputValue}
          onChange={onHandleInputChange}
          onSubmit={onHandleSubmit}
        />
        <input className={styles.submit} type="submit" value="New ToDo"></input>
      </form>
    </div>
  );
};

export default AddTodo;
