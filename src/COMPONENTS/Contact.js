import {Link} from 'react-router-dom'

import styles from '../STYLES/Main.module.css'
import '../STYLES/Input.css'

//HOOKS
import useInput from '../HOOKS/use-input';
import {useState} from 'react'


function Contact(){

    
    const{
        value: enteredFirstName,
        hasError: enteredFirstNameHasError,
        changeValueHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        valueIsValid: firstNameIsValid
    } = useInput(value => value.trim() !== '' && value.length >= 2)

    const{
        value: enteredLastName,
        hasError: enteredLastNameHasError,
        changeValueHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        valueIsValid: lastNameIsValid
    } = useInput(value => value.trim() !== ''  && value.length >= 2)

    const{
        value: enteredAdress,
        hasError: enteredAdressHasError,
        changeValueHandler:adressChangeHandler,
        inputBlurHandler: adressBlurHandler,
        valueIsValid: adressIsValid
    } = useInput(value => value.trim() !== '')

    const{
        value: enteredTel,
        hasError: enteredTelHasError,
        changeValueHandler: telChangeHandler,
        inputBlurHandler: telBlurHandler,
        valueIsValid: telIsValid
    } = useInput(value => value.length >= 6)

    const{
        value: enteredEmail,
        hasError: enteredEmailHasError,
        changeValueHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        valueIsValid: emailIsValid
    } = useInput((value => {
        return String(value)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    }))

    console.log(enteredEmailHasError)


    const{
        value: enteredBirth,
        hasError: enteredBirthHasError,
        changeValueHandler: birthChangeHandler,
        inputBlurHandler: birthBlurHandler,
        valueIsValid: birthIsValid
    } = useInput(value => value.trim() !== '')


    const{
        value: enteredInsurance,
        hasError: enteredInsuranceHasError,
        changeValueHandler: insuranceChangeHandler,
        inputBlurHandler: insuranceBlurHandler,
        valueIsValid: insuranceIsValid
    } = useInput(value => value.trim() !== '')


    const{
        value: enteredMessage,
        hasError: enteredMessageHasError,
        changeValueHandler: messageChangeHandler,
        inputBlurHandler: messageBlurHandler,
        valueIsValid: messageIsValid
    } = useInput(value => value.trim() !== '')








    const submitFormHandler = e =>{
        e.preventDefault();
        if(firstNameIsValid && lastNameIsValid &&  adressIsValid && telIsValid && emailIsValid && birthIsValid && insuranceIsValid){
            let user = {
                firstName: enteredFirstName,
                lastName: enteredLastName,
                adress: enteredAdress,
                tel: enteredTel,
                email: enteredEmail,
                birth: enteredBirth,
                insurance: enteredInsurance,
                message: enteredMessage
            }
            console.log(user)
        }

    }





    let fNameStyle = enteredFirstNameHasError ? 'error' : 'input'
    let lNameStyle = enteredLastNameHasError ? 'error' : 'input'
    let adressStyle = enteredAdressHasError ? 'error' : 'input'
    let telStyle = enteredTelHasError ? 'error' : 'input'
    let emailStyle = enteredEmailHasError ? 'error' : 'input'
    let birthStyle = enteredBirthHasError ? 'error' : 'input'
    let insuranceStyle = enteredInsuranceHasError ? 'error' : 'input'

    console.log(fNameStyle)
    return(
        <div className={styles.sectionContainer}>
            
       
            <div className={styles.contactContainer}>
                <h2> kontaktieren Sie mich gern </h2>
                <p>  Ihre Daten werde ich nur für die von Ihnen gewünschten Wünsche nutzen und zu keinem Zeitpunkt an Dritte übermitteln. <br/>
                     Erfahren Sie mehr unter <Link to="/dataprivacy" className={styles.dataprivacyLink}> Datenschutz </Link> 
                </p>

          
                <form className={styles.formContainer} onSubmit={submitFormHandler}>
                    <label> Vorname </label>
                    <input 
                    type="text"
                    name="fName"
                    id="user" 
                    className={fNameStyle}
                    value={enteredFirstName}
                    onChange={firstNameChangeHandler}
                    onBlur={firstNameBlurHandler}

                    ></input>


                    <label> Nachname </label>
                    <input 
                    type="text" 
                    name="lName"
                    id="user"
                    className={lNameStyle}
                    value={enteredLastName}
                    onChange={lastNameChangeHandler}
                    onBlur={lastNameBlurHandler}

                    ></input>


                    <label> Adresse </label>
                    <input 
                    type="text" 
                    className={adressStyle}
                    id="user"
                    name="adress"
                    value={enteredAdress}
                    onChange={adressChangeHandler}
                    onBlur={adressBlurHandler}


                    
                    ></input>
                    <label> Telefon </label>
                    <input 
                    type="tel" 
                    className={telStyle}
                    id="user"
                    name="tel"
                    value={enteredTel}
                    onChange={telChangeHandler}
                    onBlur={telBlurHandler}

                    
                    
                    ></input>
                    <label> Email </label>
                    <input 
                    type="email" 
                    id="user"
                    name="email"
                    className={emailStyle}
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}

                    
                    ></input>
                    <label> errechneter Entbindungstermin </label>
                    <input 
                    type="text" 
                    className={birthStyle}
                    value={enteredBirth}
                    onChange={birthChangeHandler}
                    onBlur={birthBlurHandler}
                    id="user"
                    name="birth"
                    
                    ></input>
                    <label> Krankenkasse </label>
                    <input 
                    type="text" 
                    className={insuranceStyle}
                    value={enteredInsurance}
                    onChange={insuranceChangeHandler}
                    onBlur={insuranceBlurHandler}
                    id="user"
                    name="insurance"

                    
                    ></input>
                    <label> schreiben Sie mir gern weitere Anliegen / Fragen </label>
                    <textarea
                    value={enteredMessage}
                    id="user"
                    name="message"
                    onChange={messageChangeHandler}
                    onBlur={messageBlurHandler}
                    
                    ></textarea>
                    <label> Datenschutzhinweise </label>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" className={styles.dataPrivacy}/> 
                        <p> Ja, ich habe den Datenschutzhinweis gelesen und akzeptiere die dortigen Bedingungen. </p>
                    </div>
                 

                    <button> senden Sie Ihre Anfrage </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;