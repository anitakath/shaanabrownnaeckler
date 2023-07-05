

//STYLES 
import styles from '../STYLES/Impressum.module.css'

//ANIMATIONS
import AOS from 'aos';
import 'aos/dist/aos.css';

import {useEffect} from 'react'

function Impressum (){


    useEffect(() =>{
        AOS.init();
    }, [])


    return(

        <div className={styles.sectionContainer}>
           <div className={styles.aboutImpressumContainer}> 
                

                <div className={styles.infoContainer} data-aos="zoom-in"  data-aos-duration="3000">
                   
                    <div className={styles.info}> 
                        
                        <ul>
                            
                            <h2> Shaana Brown Näckler </h2>
                            <p> Adresse </p>
                            <p> E-Mail-Adresse </p>
                            <p> Telefon (wenn Rund-um-die-Uhr verfügbar)</p>
                            <p> Berufsbezeichnung und der Staat, in dem die Berufsbezeichnung verliehen wurde </p>
                            <p> Zuständige Aufsichtsbehörde</p>
                            <p> Zugehörigkeit zu einer Kammer oder einem Berufsverband, sofernvorhanden </p>
                            <p> Bezeichnung der berufsrechtlichen Vorschriften und die Links dazu </p>
                            <p> Umsatzsteueridentifikationsnummer (USt-ID)</p>
                        </ul>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Impressum;