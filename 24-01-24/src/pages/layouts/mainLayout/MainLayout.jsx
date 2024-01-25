import Link from "next/link";
import styles from "./index.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.MainLayout}>
      <nav>
        <ul>
          <li>
            <Link href="/">Homepage</Link>
          </li>
          <li>
            <Link href="/pokedex">Pokedex</Link>
          </li>
          <li>
            <Link href="/instructions">Instructions</Link>
          </li>
        </ul>
      </nav>

      {children}

      <footer>
        <p>This is a fake footer. It stays at the bottom of the page.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
