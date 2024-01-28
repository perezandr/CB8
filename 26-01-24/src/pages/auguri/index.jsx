import styles from "./index.module.scss";
import Confetti from "react-confetti";
import { useState } from "react";

export default function Auguri() {
  const [pieces, setPieces] = useState(2);
  const [color, setColor] = useState([]);

  const onHandlePiecesChange = (e) => setPieces(e.target.value);

  const onHandleColorChange = (e) => {
    e.preventDefault();
    setColor(e.target.value);
  };

  return (
    <div className={styles.AuguriPage}>
      <div className={styles.inputWrapper}>
        <input type="text" value={color} onChange={onHandleColorChange} />
        <input type="range" value={pieces} onChange={onHandlePiecesChange} />
      </div>
      <Confetti
        width={1890}
        height={900}
        colors={[color]}
        numberOfPieces={pieces}
      />
    </div>
  );
}
