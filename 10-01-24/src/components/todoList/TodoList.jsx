import "./index.scss";
import TodoItem from "../todoItem";

const TodoList = ({ todoList }) => {
  return (
    <div className="todoList">
      {todoList.map((todo) => (
        <TodoItem todoData={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
