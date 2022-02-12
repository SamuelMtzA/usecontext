//hook used to store the form data in the database
import { useState } from "react"

export const useForm = (initialState = {}) => {
    const [values, setValues]= useState(initialState);
    //reset the form
    const reset = () => {
        setValues(initialState);
    };

    // handleInputChange - function to change the values from the form
    const handleInputChange = ({ target }) =>{

        setValues({
            ...values,
            [target.name]: target.value,
        });
    
      };
      //values, state of the form

      return [ values, handleInputChange, reset];
    
};
