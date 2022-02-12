import React, { useEffect, useState } from "react";
import "./effects.css";
import { Message } from "./Message";

export const SimpleForm = () => {
//use effect para checar cambios especificos 

  const [ state, setState ] = useState({
    name: '',
    email: ''
  });

  const { name, email } = state; 

  useEffect(() => {
    // console.log("hey");
  }, []);

  useEffect(() => {
    // console.log("form changed");
  }, [state]);

  useEffect(() => {
    // console.log("email changed");
  }, [email]);

  const handleInputChange = ({ target }) =>{

    setState({
        ...state,
        [target.name]: target.value,
    });

  };

  return (
    <>
      <h1>UseEffect Hook</h1>
      <hr />

      <section className="form-group">
          <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={ name }
          onChange={ handleInputChange }
          />

      </section>
      <section className="form-group">
          <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          autoComplete="off"
          value={ email }
          onChange={ handleInputChange }
          />
      </section>

      { (name === '123') && <Message/>}
    </>
  );
};