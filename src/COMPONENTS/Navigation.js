import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

//FONT AWESOME
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


//STYLES 
import styles from '../STYLES/Navigation.module.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

import {useEffect} from 'react'


 //HOOKS
import {useState} from 'react'
//MODAL
import Modal from '../MODAL/NavigationModal'


import {Transition}  from 'react-transition-group';


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
                <li  data-aos="fade-left" data-aos-duration="1500" ><NavLink className={({isActive}) => isActive ? styles.linkActive : styles.linkInactive} to="/aboutme" end> ÜBER MICH </NavLink>  </li>
                <li  data-aos="fade-left" data-aos-duration="1500" data-aos-delay="200"><NavLink className={({isActive}) => isActive ? styles.linkActive : styles.linkInactive} to="/mywork" end> MEINE DIESTLEISTUNGEN </NavLink> </li>
                <li  data-aos="fade-left" data-aos-duration="1500" data-aos-delay="400"><NavLink className={({isActive}) => isActive ? styles.linkActive : styles.linkInactive} to="/contact" end> KONTAKT </NavLink> </li>
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