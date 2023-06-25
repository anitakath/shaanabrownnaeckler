


//STYLES
import styles from '../STYLES/Header.module.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

import {useEffect} from 'react'


//PHOTOS 
import header from '../Shaana/IMG_0014.jpg'



function HeaderImg(){

    useEffect(() =>{
        AOS.init();
    }, [])


    return(
        <div className={styles.headerImgContainer}>
            <img src={header} className={styles.headerImage} alt="header" />
        </div> 

    )

}

export default HeaderImg;