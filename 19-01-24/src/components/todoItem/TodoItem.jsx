import "./index.module.scss";
import { useState } from "React";
import styles from "./index.module.scss";

const TodoItem = ({ todoData, setTodoListData }) => {
  const { id, todo, completed } = todoData;

  const [checked, setChecked] = useState(completed);

  const onHandleDelete = () =>
    setTodoListData((prev) => prev.filter((todo) => todo.id !== id));
  return (
    <div className={`${styles.todoCard} ${checked ? styles.active : ""}`}>
      <p className={styles.paragraph}>{todo}</p>
      <div className={styles.inputWrap}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
        />
        <button onClick={onHandleDelete} className={styles.closeButton}>
          X
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
