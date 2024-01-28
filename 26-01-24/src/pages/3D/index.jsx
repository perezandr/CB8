import ThreeScene from "./ThreeScene";
import styles from "./index.module.scss";

export default function ThreeDPage() {
  return (
    <div className={styles.ThreeDPage}>
      <h1>Behold, the cubes!!!</h1>
      <ThreeScene />
    </div>
  );
}
