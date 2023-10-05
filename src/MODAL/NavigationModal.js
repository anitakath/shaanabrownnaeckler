
import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";


//STYLES & ANIMATIONS 
import '../STYLES/Modal.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


//FONT AWESOME
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'


function Modal(props){


    useEffect(() =>{
        AOS.init();
    }, [])


    const mobileNavigationHandler = () =>{
        props.setShowNavigationModal(false)
    }

    

    const Background = () =>{
        return(
            <div className="background">
            </div>
        )
    }


    const NavigationModal = props =>{
        return(
            <div className="navigationModal" id="navigationModal" data-aos="fade-down"  data-aos-duration="400">
                <ul>
                    <li> 
                        <NavLink  className={({isActive}) => isActive ? 'active' : 'inactive'} to="/über-mich" onClick={mobileNavigationHandler} end> ÜBER MICH </NavLink>
                    </li>
                    <li>  
                        <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to="/meine-dienstleistungen" onClick={mobileNavigationHandler} end> MEINE DIENSTLEISTUNGEN </NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to="/kontakt" onClick={mobileNavigationHandler} end> KONTAKT </NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to="/"  onClick={mobileNavigationHandler} end> STARTSEITE</NavLink>
                    </li>
                </ul>
              
                <button  id="closeNavigationBtn" onClick={mobileNavigationHandler} className="closeModalBtnWrapper"> 
                    <FontAwesomeIcon icon={faX} className="closeModalBtn" />  
                </button>

            </div>
        )
    }




    return(
        <div>
            <React.Fragment>
                {ReactDOM.createPortal(<Background/>, document.getElementById('blackdropRoot'))}
                {ReactDOM.createPortal(<NavigationModal/>, document.getElementById('mobileNavigationRoot'))}
            </React.Fragment>

        </div>
    )
}

export default Modal