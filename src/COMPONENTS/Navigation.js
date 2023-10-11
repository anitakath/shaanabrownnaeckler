import React from 'react';
import {NavLink} from 'react-router-dom'
import { useEffect, useState} from "react";

//FONT AWESOME
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


//STYLES & ANIMATIONS
import styles from '../STYLES/Navigation.module.css'

import AOS from 'aos';
import 'aos/dist/aos.css';



//MODALS
import Modal from '../MODAL/NavigationModal'





function Navigation (){

    const[showNavigationModal, setShowNavigationModal] = useState(false);

    const mobileNavigationHandler = () => {
        setShowNavigationModal(true)
    }

    useEffect(() =>{
        AOS.init();
    }, [])

    return(
        <div className={styles.navigationContainer}>
           
           
            <ul className={styles.navigation}>
                <li  data-aos="fade-left" data-aos-duration="1500" ><NavLink className={({isActive}) => isActive ? styles.linkActive : styles.linkInactive} to="/ueber-mich" end> ÜBER MICH </NavLink>  </li>
                <li  data-aos="fade-left" data-aos-duration="1500" data-aos-delay="200"><NavLink className={({isActive}) => isActive ? styles.linkActive : styles.linkInactive} to="/meine-dienstleistungen" end> MEINE DIESTLEISTUNGEN </NavLink> </li>
                <li  data-aos="fade-left" data-aos-duration="1500" data-aos-delay="400"><NavLink className={({isActive}) => isActive ? styles.linkActive : styles.linkInactive} to="/kontakt" end> KONTAKT </NavLink> </li>
                <li  data-aos="fade-left" data-aos-duration="1500" data-aos-delay="600"><NavLink className={({isActive}) => isActive ? styles.linkActive : styles.linkInactive} to="/" end> STARTSEITE </NavLink></li>
          
            </ul>



            <div className={styles.mobileNav}>
                {showNavigationModal && <Modal showNavigationModal={showNavigationModal} setShowNavigationModal={setShowNavigationModal} />} 
                {!showNavigationModal && <FontAwesomeIcon icon={faBars} className={styles.menuBar} onClick={mobileNavigationHandler}/> }
            </div>
            
        </div>
    )
}

export default Navigation;