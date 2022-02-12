import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {
  const {counter, increment, decrement, reset} = useCounter(15);

  const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  //es necesario evitar la data al principio por lo que se niega el primer valor de data que es null, debido a que es una peticion asincrona
  // doble negacion de null es false 
  let {author, quote} = [];

  if(!!data){
    author = data[0].author;
    quote = data[0].quote;
  };

  // const {author, quote} = !!data && data[0];
  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr/>
      {loading  
      ?
        (
        <section className="alert alert-info text-center">
          Loading....
        </section>
        )
      :
        (
        <blockquote className="blockquote text-right">
          <p className="mb-0"> {quote} </p>
          <footer className="blockquote footer">-{author}</footer>
        </blockquote>
        )
      }
      <button className="btn btn-dark" onClick={decrement}>Previous Quote</button>
      <button className="btn btn-warning" onClick={reset}>Reset {counter}</button>
      <button className="btn btn-dark" onClick={increment}>Next Quote</button>
    </>
  );
};
