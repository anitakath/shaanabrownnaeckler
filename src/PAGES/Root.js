
import {Outlet} from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer'


import header from '../Shaana/IMG_0014.jpg'
import styles from '../STYLES/Header.module.css'


function Root(){

/*
    <div>
    <img src={header} className={styles.headerImage} alt="header"/>

</div> */

    return(
        <div>
            <div>
           
                <Header/>
               

            </div>


            <main>
                <Outlet/>
               
            </main>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Root;