
import {Link} from 'react-router-dom'

//STYLES 
import styles from './STYLES/Footer.module.css'

function Footer (){
    return(
        <div className={styles.footerContainer}>
             © Copyright 2023 | Shaana Brown Näckler | All rights reserved |  <Link to="/dataprivacy" className={styles.dataprivacyLink}> Datenschutz </Link>
        </div>
    )
}

export default Footer;