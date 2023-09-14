
import {Link} from 'react-router-dom'

//STYLES 
import styles from '../STYLES/Footer.module.css'

function Footer (){
    return(
        <div className={styles.footerContainer}>
             <p> © 2023 Shaana Brown Näckler | Alle Rechte vorbehalten | </p> 
             <div className={styles.footerInformation}>
             <Link to="/shaanabrownnaeckler/datensicherheit" className={styles.dataprivacyLink}> Datenschutz </Link> |
             <Link to="/shaanabrownnaeckler/impressum" className={styles.dataprivacyLink}> Impressum </Link>
             </div>
        </div>
    )
}

export default Footer;