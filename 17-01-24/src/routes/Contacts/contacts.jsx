import styles from "./index.module.scss";
import { Link } from "react-router-dom";

export default function Contacts() {
  const contactsArray = [
    {
      id: "1",
      department: "Customer Support",
      name: "Sir Tickles McLaugh-a-lot",
      email: "tickleme@example.com",
      phone: "555-GIG-GLES",
    },
    {
      id: "2",
      department: "Technical Assistance",
      name: "Captain Code Cruncher",
      email: "crunchtime@example.com",
      phone: "555-BUG-FIX",
    },
    {
      id: "3",
      department: "Marketing Inquiries",
      name: "Countess Clicks-a-Lot",
      email: "clickme@example.com",
      phone: "555-CLIK-777",
    },
    {
      id: "4",
      department: "General Inquiries",
      name: "Professor Puzzlemaster",
      email: "puzzled@example.com",
      phone: "555-RID-DLES",
    },
  ];

  return (
    <div>
      <section className={styles.header}>
        <h2 className="contactsTitle">Contacts</h2>
        <Link to={"/"}>
          <button>Home</button>
        </Link>
      </section>
      <div className={styles.contactCardList}>
        {contactsArray.map((contact) => (
          <div className={styles.contactCard} key={contact.id}>
            <h3>{contact.department}</h3>
            <ul>
              <li>{`Name: ${contact.name}`}</li>
              <li>{`Email:  ${contact.email}`}</li>
              <li>{`Phone:  ${contact.phone}`}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
