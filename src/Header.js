
//STYLES  && IMAGES
import styles from './STYLES/Header.module.css'
import header from './Shaana/IMG_0014.jpg'

//COMPONENTS
import Navigation from './COMPONENTS/Navigation'

/*
<div>
<img src={header} className={styles.headerImage} alt="header"/>
</div> */

function Header (){
    return(
        <div className={styles.headerContainer}>
          
            <div className={styles.headerNavigation}>
                <h1 className={styles.headerTitle}>  Shaana Brown Näckler Hebamme </h1>
                <Navigation />

            </div>
          
        </div>
    )
}


export default Header;