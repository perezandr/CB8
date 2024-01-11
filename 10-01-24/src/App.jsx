import { useState, useEffect } from "react";
import TodoList from "./components/todoList";

import "./App.scss";

function App() {
  const [todoListData, setTodoListData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setTodoListData(data.todos));
  }, []);

  return (
    <div>
      <h1 className="title">Todo-list</h1>
      <TodoList todoList={todoListData} />
    </div>
  );
}

export default App;
