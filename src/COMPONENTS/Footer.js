
import Link from 'next/link'
import React, { useContext } from "react";

//STYLES 
import styles from '../STYLES/Footer.module.css'

function Footer (){
    return(
        <div className={styles.footerContainer}>
             <p> © 2023 Shaana Brown Näckler | Alle Rechte vorbehalten  </p> 
             <div className={styles.footerInformation}>
             <Link href="/datensicherheit" className={styles.dataprivacyLink}> Datenschutz </Link> |
             <Link href="/impressum" className={styles.dataprivacyLink}> Impressum </Link>
             </div>
        </div>
    )
}

export default Footer;