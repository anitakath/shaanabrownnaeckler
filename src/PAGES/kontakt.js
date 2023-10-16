
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




  const submitFormHandler = async (e) => {

    e.preventDefault();
    console.log('hi')

     const formData = {
       vorname: enteredFirstName,
       nachname: enteredLastName,
       adresse: enteredAdress,
       postleitzahl: enteredPostal,
       telefonnummer: enteredTel,
       email: enteredEmail,
       geburtstermin: enteredBirth,
       versicherung: enteredInsurance,
       nachricht: enteredMessage,
       datensicherheit: checkboxCheck,
     };

     try {
       const response = await fetch(
         //package.json: "proxy": "https://nbaplayers-f2003067a6ec.herokuapp.com",
         //"https://nbaplayers-f2003067a6ec.herokuapp.com/api/validate",
         "/api/validate",
         {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(formData),
         }
       );

       const data = await response.json();

       if (response.ok) {
         console.log(data.message);
         setFormComplete(true);
         console.log(formComplete);
         //handleSubmit();
       } else {
         console.log(data.error);
       }
     } catch (error) {
       console.error(error);
     }


   

    /*
  if (formComplete === true) {
    handleSubmit();
  } else {
    return;
  } 
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
          Erfahre mehr unter...
        </p>

       
      </div>
    </div>
  );
}

export default Contact;