import React, { useContext } from "react";
import { useEffect } from "react";

//STYLES & ANIMATIONS
import styles from "../STYLES/Impressum.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Link from "next/link";

function Impressum() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.aboutImpressumContainer}>
        <div
          className={styles.infoContainer}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className={styles.info}>
            <div className={styles.infoWrapper}>
              <h2> Shaana Brown Näckler </h2>

              <p>
                kontaktieren Sie mich gern über mein
                <Link href="/contact" className={styles.link}>
                  Kontaktformular
                </Link>
                oder per E-Mail:
                <a
                  href="mailto:wagner.annekathrin@gmx.de"
                  className={styles.email}
                >
                  {" "}
                  brown.naeckler@gmail.com
                </a>
              </p>
              <p>
                Ich bin Hebamme in Hamburg und der Behörde für Arbeit,
                Gesundheit, Soziale Familie und Integration zugehörig. Zudem bin
                ich Mitglied beim Deutschen Hebammenverband und berücksichtige
                während meiner Arbeit stets die offiziellen
                <Link
                  href="https://www.g-ba.de/richtlinien/19/"
                  target="_blank"
                  className={styles.link}
                >
                  Mutterschaftsrichtlinien.
                </Link>
              </p>
              <p>
                Folgend meine Umsatzsteueridentifikationsnummer (USt-ID):
                45/031/04178
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impressum;
