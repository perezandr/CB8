import styles from "./index.module.scss";

export default function Instructions() {
  return (
    <div className={styles.Instructions}>
      <h1>Welcome to My Pokedex!</h1>

      <h2>Searching for Pokemon:</h2>
      <ol>
        <li>
          <span>Name or Number:</span> Enter the name or number of the Pokemon
          you want to learn more about in the search bar.
        </li>
        <li>
          <span>Click/Search Icon:</span> Press Enter or click on the search
          icon to initiate the search.
        </li>
      </ol>

      <h2>Exploring Pokemon Details:</h2>
      <ol>
        <li>
          <span>Results:</span> View detailed information about the Pokemon,
          including its name, number, types, abilities, and more.
        </li>
        <li>
          <span>Navigation:</span> If you want to explore more Pokemon, use the
          navigation options to move between pages.
        </li>
      </ol>

      <h2>Additional Tips:</h2>
      <ol>
        <li>
          <span>Mobile-Friendly:</span> Our Pokedex is designed to work
          seamlessly on both desktop and mobile devices.
        </li>
        <li>
          <span>Feedback:</span> Have suggestions or encountered issues? We'd
          love to hear from you! Use the contact form to provide feedback.
        </li>
      </ol>

      <h2>Start Exploring Now!</h2>
    </div>
  );
}
