import React from "react";
import { useEffect, useState } from "react";

//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

//STYLES & ANIMATIONS
import styles from "../STYLES/Navigation.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

//MODALS
import Modal from "../MODAL/NavigationModal";

import Link from 'next/link'

function Navigation() {
  const [showNavigationModal, setShowNavigationModal] = useState(false);

  const mobileNavigationHandler = () => {
    setShowNavigationModal(true);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  /*
          <li data-aos="fade-left" data-aos-duration="1500" data-aos-delay="400">
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.linkActive : styles.linkInactive
              }
              to="/kontakt"
              end
            >
              {" "}
              KONTAKT{" "}
            </NavLink>{" "}
          </li>
   */

  return (
    <div className={styles.navigationContainer}>
      <ul className={styles.navigation}>
        <li data-aos="fade-left" data-aos-duration="1500">
          <Link href="/uebermich" className={styles.linkInactive} end>
            ÜBER MICH
          </Link>
        </li>
        <li data-aos="fade-left" data-aos-duration="1500" data-aos-delay="200">
          <Link
            href="/meinedienstleistungen"
            className={styles.linkInactive}
            end
          >
            MEINE DIESTLEISTUNGEN
          </Link>
        </li>
        <li data-aos="fade-left" data-aos-duration="1500" data-aos-delay="400">
          <Link href="/kontakt" className={styles.linkInactive} end>
            KONTAKT
          </Link>
        </li>
        <li data-aos="fade-left" data-aos-duration="1500" data-aos-delay="600">
          <Link 
            href="/" 
            className={styles.linkInactive} 
            end>
            STARTSEITE
          </Link>
        </li>
      </ul>

      <div className={styles.mobileNav}>
        {showNavigationModal && (
          <Modal
            showNavigationModal={showNavigationModal}
            setShowNavigationModal={setShowNavigationModal}
          />
        )}
        {!showNavigationModal && (
          <FontAwesomeIcon
            icon={faBars}
            className={styles.menuBar}
            onClick={mobileNavigationHandler}
          />
        )}
      </div>
    </div>
  );
}

export default Navigation;
