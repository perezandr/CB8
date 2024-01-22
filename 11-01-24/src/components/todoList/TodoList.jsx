import styles from "./index.module.scss";
import TodoItem from "../todoItem";

const TodoList = ({ todoList, setTodoListData }) => {
  const reversTodoList = [...todoList].reverse();

  return (
    <div className={styles.todoList}>
      {reversTodoList.map((todo) => (
        <TodoItem
          todoData={todo}
          key={todo.id}
          setTodoListData={setTodoListData}
        />
      ))}
    </div>
  );
};

export default TodoList;
