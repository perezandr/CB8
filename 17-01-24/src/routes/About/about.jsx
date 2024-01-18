import { Link } from "react-router-dom";
import styles from "./index.module.scss";

export default function About() {
  return (
    <section>
      <div className={styles.aboutUs}>
        <h1>About Us</h1>
        <Link to={"/"}>
          <button>Home</button>
        </Link>
      </div>
      <div className={styles.contentAboutUs}>
        <img
          src="https://as1.ftcdn.net/v2/jpg/02/42/74/98/1000_F_242749868_VkK3wItkyEjItaM5FHLWJueA2jI7EURa.jpg"
          alt="Our team"
        />
        <p className={styles.textAboutUs}>
          "At ZanyWidgets, we're a bunch of quirky enthusiasts who believe that
          life is better with a dash of eccentricity. Founded in the magical
          year of imagination, our team of whimsical wizards crafts the most
          fantastical widgets that defy the laws of normalcy. We're on a mission
          to sprinkle joy and laughter into your everyday routine, one
          delightfully absurd invention at a time. Our headquarters, located in
          the Enchanted Valley, is a hub of creativity, where unicorns roam
          free, and brainstorming sessions involve copious amounts of
          rainbow-colored tea. Join us on this whimsical journey, and let's make
          the world a more peculiar and amusing place together!" (Create with
          ChatGpt)
        </p>
      </div>
    </section>
  );
}
