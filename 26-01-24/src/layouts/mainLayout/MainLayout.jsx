import Link from "next/link";
import styles from "./index.module.scss";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className={styles.NavBar}>
        <ul>
          <li>
            <Link href="/">Homepage</Link>
          </li>
          <li>
            <Link href="/auguri">Auguri</Link>
          </li>
          <li>
            <Link href="/3D">3D</Link>
          </li>
        </ul>
      </div>

      {children}

      <footer className={styles.Footer}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit, officia odit molestias tempora fugit nostrum.
        </p>
      </footer>
    </>
  );
};

export default MainLayout;
