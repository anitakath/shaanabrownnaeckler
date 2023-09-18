
import { useEffect } from "react";

//STYLES & ANIMATIONS
import styles from '../STYLES/Header.module.css'

import AOS from 'aos';
import 'aos/dist/aos.css';




// IMAGES
import header from '../Shaana/title.jpeg'
import headerMobile from  '../Shaana/mobileHeader.jpg'

//SEO
import { Helmet } from 'react-helmet';

function HeaderImg(){

    useEffect(() =>{
        AOS.init();
    }, [])


    return (
      <div className={styles.headerImgContainer}>
        <Helmet>
          <title> Hebamme in Hamburg: Shaana Brown Näckler</title>
          <meta 
            name=" description " 
            content=" erhalte Informationen über die Betreuungsmöglichkeiten durch die Hebamme Shaana Brown Näckler in Hamburg " 
          />
          <meta 
            name="keywords" 
            content="Hebamme, Hamburg, Altona, Eimsbüttel, Eppendorf, Sternschanze, St. Pauli, Ottensen, Bahrenfeld, Shaana Brown Näckler, Schwangerenvorsorge, Wochenbett, Stillzeit, Pinard-Rohr, Baby, Babypflege, Schwangerschaft, 
            Schwangerschaftsbetreuung, Geburtsvorbereitung, Wochenbettbetreuung, Stillberatung, Babymassage, Elternberatung, Geburtsbegleitung, Familienplanung, Nachsorge, Hebammenbetreuung, Wochenbettbetreuung für zu Hause, Beratung
            bei Schwangerschaftsbeschwerden"
          />
        </Helmet>

        <img
          src={header}
          className={styles.headerImg}
          alt="Pinard-Rohr, mit der die Hebamme die Herztöne des Babys abhört"
        ></img>

        <img
          src={headerMobile}
          className={styles.headerImgMobile}
          alt="Pinard-Rohr, mit der die Hebamme die Herztöne des Babys abhört"
        ></img>
      </div>
    );

}

export default HeaderImg;