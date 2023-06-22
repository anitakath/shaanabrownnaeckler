import {useState} from 'react'


const useInput = (validation)  =>{


    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const valueChangeHandler = e =>{
        setEnteredValue(e.target.value)
    }

    const inputBlurHandler = e =>{
        setIsTouched(true)
    }

    const valueIsValid = validation(enteredValue)

    const hasError = !valueIsValid && isTouched;

   

    return{
        value: enteredValue,
        changeValueHandler: valueChangeHandler,
        inputBlurHandler,
        valueIsValid: valueIsValid,
        hasError: hasError,
    }


}

export default useInput;