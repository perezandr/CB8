import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

export default function Page404() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className={styles.Page404}>
      <h1>Page404</h1>
      <button onClick={handleSubmit}>Come back home</button>
    </div>
  );
}
