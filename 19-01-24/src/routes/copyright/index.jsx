import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

export default function Copyright() {
  const navigate = useNavigate();

  const goToHomepage = () => {
    navigate("/");
  };

  // const goToSection = (id) => {
  //   navigate(`/copyright#${id}`);
  // };

  return (
    <div className={styles.copyrightPage}>
      <div className={styles.copyrightSide}>
        <ul className={styles.buttonList}>
          <li>
            <button onClick={goToHomepage}>Homepage</button>
          </li>
          <li>
            <button>Introduction to DugongDigital</button>
          </li>
          <li>
            <button>DugongDigital Content Ocean</button>
          </li>
          <li>
            <button>Copyrighted Dugong Choreography</button>
          </li>
          <li>
            <button>DugongDigital Trademarks</button>
          </li>
          <li>
            <button>DugongTranslator Technology</button>
          </li>
          <li>
            <button>Dugong Security Pod</button>
          </li>
          <li>
            <button>Reporting Copyright Currents</button>
          </li>
          <li>
            <button>Digital Dugong Herding</button>
          </li>
        </ul>
      </div>
      <div className={styles.copyrightText}>
        <h1 className={styles.title}>
          DugongDigital: Seasational Copyright Agreement
        </h1>
        <p>Last Updated: Current as of the last dugong dance party.</p>
        <br></br>
        <ol>
          <li>
            <h3 className={styles.title}>Introduction to DugongDigital</h3>
            <p>
              Welcome to DugongDigital, the ocean's digital haven for dugong
              enthusiasts. This Seasational Copyright Agreement (SCA) outlines
              the terms and conditions for engaging with our marine-inspired
              digital content.
            </p>
          </li>
          <br></br>
          <li>
            <h3 className={styles.title}>DugongDigital Content Ocean</h3>
            <p>
              All content featuring our graceful dugong friends, including
              dugong images, dugong-inspired poetry, and dugong dance tutorials,
              is the property of DugongDigital. Dive into the digital depths of
              our content ocean but remember, these dugongs have exclusive
              digital citizenship.
            </p>
          </li>
          <br></br>
          <li>
            <h3 className={styles.title}>Copyrighted Dugong Choreography</h3>
            <p>
              Our professionally choreographed dugong dance routines are a
              unique blend of underwater elegance and digital rhythm. Attempting
              to replicate, reenact, or perform these dances without express
              permission is strictly forbidden. Unauthorized dance-off attempts
              may result in mandatory participation in a synchronized dugong
              ballet.
            </p>
          </li>
          <br></br>
          <li>
            <h3 className={styles.title}>DugongDigital Trademarks</h3>
            <p>
              The DugongDigital logo, affectionately known as the DugongWave, is
              a trademark of DugongDigital. Any attempts to create similar
              marine-inspired logos will be met with virtual waves of legal
              actions and a sudden influx of dugong gifs in your inbox.
            </p>
          </li>
          <br></br>
          <li>
            <h3 className={styles.title}>DugongTranslator Technology</h3>
            <p>
              Our groundbreaking DugongTranslator, translating human expressions
              into dugong-like vocalizations, is a patented technology. Any
              attempts to manipulate, tweak, or hack into the DugongTranslator
              may lead to a temporary loss of digital underwater communication
              privileges and mandatory dugong appreciation sessions.
            </p>
          </li>
          <br></br>
          <li>
            <h3 className={styles.title}>Dugong Security Pod</h3>
            <p>
              DugongDigital employs a highly efficient Dugong Security Pod to
              safeguard our digital coral reefs. Unauthorized access, digital
              fishnet casting, or any form of cyber-sea-mischief will be met
              with a coordinated dugong tail flip and immediate reporting to
              marine digital authorities.
            </p>
          </li>
          <br></br>
          <li>
            <h3 className={styles.title}>Reporting Copyright Currents</h3>
            <p>
              If you believe your dugong-inspired content has been erroneously
              swept into DugongDigital without proper credit, please contact our
              Dugong Legal team for swift resolution. We assure you that we'll
              navigate through any digital currents to rectify the situation
              promptly.
            </p>
          </li>
          <br></br>
          <li>
            <h3 className={styles.title}>Digital Dugong Herding</h3>

            <p>
              DugongDigital reserves the right to herd, swim, or rearrange
              digital dugongs on the webpage for optimal marine viewing
              experience. This may involve periodic updates, reorganizations, or
              the introduction of new dugong dance moves. DugongDigital will not
              be held responsible for any emotional attachment developed to
              specific dugongs during this process.
            </p>
          </li>
          <br></br>
        </ol>
        <p>
          By exploring DugongDigital, you agree to abide by this Seasational
          Copyright Agreement and immerse yourself in the fascinating world of
          digital dugong content. May your online journey be filled with dugong
          delights, underwater wonders, and dugong-derived digital decorum.
        </p>
      </div>
    </div>
  );
}
