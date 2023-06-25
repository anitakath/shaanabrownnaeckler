import React from 'react'

import ReactDOM from 'react-dom';

//STYLES
import '../STYLES/NavigationModal.css'

import {NavLink} from 'react-router-dom'


//FONT AWESOME
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'


function Modal(props){

    const mobileNavigationHandler = () =>{
        props.setShowNavigationModal(false)
    }

    const Blackdrop = () =>{
        return(
            <div className="blackdrop">
            </div>
        )
    }


    const NavigationModal = props =>{



        return(
            <div className="navigationModal" id="navigationModal">
                <ul>
                    <li> 
                        <NavLink  className={({isActive}) => isActive ? 'link' : 'inactive'} to="/aboutme" end> ÜBER MICH </NavLink>
                    </li>
                    <li>  
                        <NavLink className={({isActive}) => isActive ? 'link' : 'inactive'} to="/mywork" end> MEINE DIENSTLEISTUNGEN </NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'link' : 'inactive'} to="/contact" end> KONTAKT </NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'link' : 'inactive'} to="/" end> STARTSEITE</NavLink>
                    </li>
                </ul>
              
                <button  id="closeNavigationBtn"onClick={mobileNavigationHandler} className="closeModalBtnWrapper"> 
                    <FontAwesomeIcon icon={faX} className="closeModalBtn" />  
                </button>

            </div>
        )
    }

    console.log(props.showNavigationModal)
    console.log(props.setShowNavigationModal)



    return(
        <div>
            <React.Fragment>
                {ReactDOM.createPortal(<Blackdrop/>, document.getElementById('blackdropRoot'))}
                {ReactDOM.createPortal(<NavigationModal/>, document.getElementById('mobileNavigationRoot'))}
            </React.Fragment>

        </div>
    )
}

export default Modal