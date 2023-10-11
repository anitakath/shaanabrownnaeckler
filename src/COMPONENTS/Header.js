import React, { useContext } from "react";
//STYLES
import styles from "../STYLES/Header.module.css";

//COMPONENTS
import Navigation from "./Navigation";

function Header() {
  return (
    <div className={styles.headerNavigation}>
      <h1 className={styles.headerTitle}> Shaana Brown Näckler, Hebamme</h1>
      <Navigation />
    </div>
  );
}

export default Header;
