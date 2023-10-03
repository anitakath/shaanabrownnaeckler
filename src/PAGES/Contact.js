import {Link, redirect, useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'


//STYLES & ANIMATIONS
import styles from '../STYLES/Contact.module.css'
import '../STYLES/Input.css'
import AOS from "aos";
import "aos/dist/aos.css";



//HOOKS
import useInput from '../HOOKS/use-input';


// BACKEND API FORM
import { useForm, ValidationError } from '@formspree/react';

//SEO

import { Helmet, HelmetProvider } from "react-helmet-async";


function Contact(){
  useEffect(() => {
    AOS.init();
  }, []);

  const {
    value: enteredFirstName,
    changeValueHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    valueIsValid: firstNameIsValid,
    style: fNameStyle,
  } = useInput((value) => value.trim() !== "" && value.length >= 2);

  const {
    value: enteredLastName,
    changeValueHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    valueIsValid: lastNameIsValid,
    style: lNameStyle,
  } = useInput((value) => value.trim() !== "" && value.length >= 2);

  const {
    value: enteredAdress,
    changeValueHandler: adressChangeHandler,
    inputBlurHandler: adressBlurHandler,
    valueIsValid: adressIsValid,
    style: adressStyle,
  } = useInput((value) => value.trim() !== "" && value.length >= 4);

  const {
    value: enteredPostal,
    changeValueHandler: postalChangeHandler,
    inputBlurHandler: postalBlurHandler,
    style: postalStyle,
  } = useInput((value) => value !== NaN && value.length === 5);


  const {
    value: enteredTel,
    changeValueHandler: telChangeHandler,
    inputBlurHandler: telBlurHandler,
    valueIsValid: telIsValid,
    style: telStyle,
  } = useInput((value) => value.length >= 6 && value.length <= 15);

  const {
    value: enteredEmail,
    changeValueHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    valueIsValid: emailIsValid,
    style: emailStyle,
  } = useInput((value) => {
    return String(value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  });

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let nextYear = date.getFullYear() + 1;

  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = "0" + month;
  }

  const currentDate = `${year}-${month}-${day}`;

  const maxDate = `${nextYear}-${month}-${day}`;

  const {
    value: enteredBirth,
    changeValueHandler: birthChangeHandler,
    inputBlurHandler: birthBlurHandler,
    style: birthStyle,
  } = useInput((value) => value >= currentDate && value <= maxDate);

  /* value === $( "#datepicker" ).datepicker( "option", "dateFormat",'yy-mm-dd') */

  const {
    value: enteredInsurance,
    changeValueHandler: insuranceChangeHandler,
    inputBlurHandler: insuranceBlurHandler,
    valueIsValid: insuranceIsValid,
    style: insuranceStyle,
  } = useInput((value) => value.trim() !== "" && value.length >= 2);

  const {
    value: enteredMessage,
    changeValueHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const [checkboxCheck, setCheckboxCheck] = useState(false);

  const checkboxHandler = () => {
    setCheckboxCheck((x) => !x);
  };

  const [formComplete, setFormComplete] = useState(false);

  useEffect(() => {
    if (
      checkboxCheck === true &&
      firstNameIsValid &&
      lastNameIsValid &&
      adressIsValid &&
      enteredPostal &&
      telIsValid &&
      emailIsValid &&
      insuranceIsValid
    ) {
      setFormComplete(true);
    } else {
      setFormComplete(false);
    }
  }, [
    checkboxCheck,
    firstNameIsValid,
    lastNameIsValid,
    adressIsValid,
    enteredPostal,
    emailIsValid,
    telIsValid,
    insuranceIsValid,
  ]);

  // FORM BACKEND API FORMSPREE
  const [state, handleSubmit] = useForm("myyqgqrr");

  //SHAANA : xleypnqk
  // ANNE: myyqgqrr

  let btnText = "sende deine Anfrage";

  if (state.submitting) {
    btnText = " Anfrage wird gesendet";
  }

  const [response, setResponse] = useState('')
  console.log(response)

   console.log(formComplete);





  const submitFormHandler = async (e) => {

    e.preventDefault();


    const formData = {
      vorname: enteredFirstName,
      nachname: enteredLastName,
      adresse: enteredAdress,
      postleitzahl: enteredPostal,
      telefonnummer: enteredTel,
      email: enteredEmail,
      geburtstermin: enteredBirth,
      versicherung: enteredInsurance,
      datensicherheit: checkboxCheck,
    };

    try {
      const response = await fetch(
        "https://nbaplayers-f2003067a6ec.herokuapp.com/api/validate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if(response.ok){
        setResponse(data.message);
        //handleSubmit();
 

      } else{
        console.log(data.error)
      }
     
    } catch (error) {
      console.error(error)

    }

 

    
      /*

      if (formComplete === true) {
        handleSubmit();
      } else {
        return;
      } 
      */
    

    /*
      action="https://formspree.io/f/myyqgqrr"
      method="POST"
    */
  };


  /*
      action="https://formspree.io/f/myyqgqrr"
      method="POST"
  */

  return (
    <div className={styles.sectionContainer}>
      <HelmetProvider>
        <Helmet>
          <title> Kontaktformular der Hebamme Shaana Brown Näckler </title>
          <meta
            name=" description "
            content=" kontaktiere die Hebamme Shaana Brown Näckler in Hamburg "
          />
          <meta
            name="keywords"
            content="Hebamme, Hamburg, Altona, Eimsbüttel, Eppendorf, Sternschanze, St. Pauli, Ottensen, Bahrenfeld, Shaana Brown Näckler, Schwangerenvorsorge, Wochenbett, Stillzeit, Pinard-Rohr, Baby, Babypflege, Schwangerschaft, 
            Schwangerschaftsbetreuung, Geburtsvorbereitung, Wochenbettbetreuung, Stillberatung, Babymassage, Elternberatung, Geburtsbegleitung, Familienplanung, Nachsorge, Hebammenbetreuung, Wochenbettbetreuung für zu Hause, Beratung
            bei Schwangerschaftsbeschwerden"
          />
        </Helmet>
      </HelmetProvider>

      <div className={styles.contactContainer}>
        <h1 data-aos="zoom-in" data-aos-duration="1500">
          Kontaktiere mich
        </h1>
        <p data-aos="zoom-in" data-aos-duration="1500">
          Deine Daten werde ich nur für die von dir gewünschten Wünsche nutzen
          und zu keinem Zeitpunkt an Dritte übermitteln. <br />
          Erfahre mehr unter
        </p>

        <form
          




          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-delay="500"
          className={styles.formContainer}
          onSubmit={submitFormHandler}
        >
          <label htmlFor="fName"> Vorname* </label>
          <input
            type="text"
            name="fName"
            id="fName"
            className={fNameStyle}
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            placeholder="vorname"
          ></input>
          <ValidationError prefix="fName" field="fName" errors={state.errors} />

          <label htmlFor="lName"> Nachname* </label>
          <input
            type="text"
            name="lName"
            id="lName"
            className={lNameStyle}
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            placeholder="nachname"
          ></input>
          <ValidationError prefix="lName" field="lName" errors={state.errors} />

          <label htmlFor="user"> Adresse & Hausnummer* </label>
          <input
            type="text"
            className={adressStyle}
            id="user"
            name="adress"
            value={enteredAdress}
            onChange={adressChangeHandler}
            onBlur={adressBlurHandler}
            placeholder="adresse und hausnummer"
            required
          ></input>
          <ValidationError
            prefix="adress"
            field="adress"
            errors={state.errors}
          />

          <label htmlFor="user"> Postleitzahl* </label>
          <input
            type="number"
            className={postalStyle}
            id="user"
            name="postal"
            value={enteredPostal}
            onChange={postalChangeHandler}
            onBlur={postalBlurHandler}
            placeholder="postleitzahl"
            required
          ></input>

          <ValidationError
            prefix="postal"
            field="postal"
            errors={state.errors}
          />

          <label htmlFor="user"> Telefon* </label>
          <input
            type="tel"
            className={telStyle}
            id="user"
            name="tel"
            value={enteredTel}
            onChange={telChangeHandler}
            onBlur={telBlurHandler}
            placeholder="telefon"
            required
          ></input>
          <ValidationError prefix="tel" field="tel" errors={state.errors} />

          <label htmlFor="user"> Email* </label>
          <input
            type="email"
            id="user"
            name="email"
            className={emailStyle}
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            placeholder="email"
            required
          ></input>
          <ValidationError prefix="email" field="email" errors={state.errors} />

          <label htmlFor="user"> errechneter Entbindungstermin* </label>
          <input
            className={birthStyle}
            type="date"
            id="datepicker"
            value={enteredBirth}
            onChange={birthChangeHandler}
            onBlur={birthBlurHandler}
            name="birth"
            min={currentDate}
            max={maxDate}
            placeholder="errechneter Entbindungstermin"
            required
          />
          <ValidationError prefix="birth" field="birth" errors={state.errors} />

          <label htmlFor="user"> Krankenkasse* </label>
          <input
            type="text"
            className={insuranceStyle}
            value={enteredInsurance}
            onChange={insuranceChangeHandler}
            onBlur={insuranceBlurHandler}
            id="user"
            name="insurance"
            required
            placeholder="krankenkasse"
          ></input>
          <ValidationError
            prefix="insurance"
            field="insurance"
            errors={state.errors}
          />

          <label htmlFor="user">
            {" "}
            schreibe mir gern weitere Anliegen / Fragen{" "}
          </label>
          <textarea
            value={enteredMessage}
            id="user"
            name="message"
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
            placeholder="schreibe mir gern weitere anliegen / fragen"
          ></textarea>
          <ValidationError
            prefix="message"
            field="message"
            errors={state.errors}
          />

          <label htmlFor="user"> </label>

          <div className={styles.checkboxContainer}>
            <input type="checkbox" onClick={checkboxHandler}></input> ja, ich
            habe den Datenschutzhinweis gelesen und akzeptiere die dortigen
            Bedingungen.
          </div>

          <button type="submit" disabled={!formComplete}>
            sende deine Anfrage
          </button>
          {!formComplete && (
            <p className={styles.formInfos}>
              bitte fülle alle Felder mit den Sternchen unbedingt aus und
              akzeptiere die Datenschutzhinweise, ehe du die Kontaktanfrage
              abschickst
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;