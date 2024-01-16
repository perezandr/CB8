import { useState, useEffect } from "react";
import TodoList from "./components/todoList";
import AddTodo from "./components/addTodo";
import styles from "./App.module.scss";

function App() {
  const [todoListData, setTodoListData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setTodoListData(data.todos));
  }, []);

  return (
    <div className={styles.App}>
      <h1 className={styles.title}>Todo-list</h1>
      <AddTodo setTodoListData={setTodoListData} />
      <TodoList todoList={todoListData} setTodoListData={setTodoListData} />
    </div>
  );
}

export default App;
