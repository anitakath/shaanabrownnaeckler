   import React, { useContext } from 'react';
import { useEffect } from "react";

//STYLES & ANIMATIONS
import styles from '../STYLES/Header.module.css'

import AOS from 'aos';
import 'aos/dist/aos.css';


// IMAGES
import header from '../Shaana/mobileImg.jpg'
import headerMobile from  '../Shaana/mobileImg.jpg'

//SEO
import { Helmet, HelmetProvider } from "react-helmet-async";

function HeaderImg(){

    useEffect(() =>{
        AOS.init();
    }, [])


    return (
      <div className={styles.headerImgContainer}>
        <HelmetProvider>
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
        </HelmetProvider>

        <img
          src={header}
          className={styles.headerImg}
          alt="Pinard-Rohr, mit der die Hebamme die Herztöne des Babys abhört"
        ></img>
<<<<<<< HEAD:src/PAGES/HeaderImg.js
        <h1> hi</h1>

=======
        
>>>>>>> 0739f35e6ecf2ab47ef4a1e60c923e106fb981e9:src/COMPONENTS/HeaderImg.js
        <img
          src={headerMobile}
          className={styles.headerImgMobile}
          alt="Pinard-Rohr, mit der die Hebamme die Herztöne des Babys abhört"
        ></img>
      </div>
    );

}

export default HeaderImg;