import { useState } from "react";
import "./index.scss";

const TodoItem = ({ todoData }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={`todoCard${isChecked ? "-checked" : ""}`}>
      <p className="task">{todoData.todo}</p>

      <input type="checkbox" checked={isChecked} onChange={handleCheckBox} />
    </div>
  );
};

export default TodoItem;
