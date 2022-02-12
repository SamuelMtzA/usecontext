import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

import '../02-useEffect/effects.css'

export const Layout = () => {
  const {counter, increment, decrement, reset} = useCounter(15);

  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  //es necesario evitar la data al principio por lo que se niega el primer valor de data que es null
  // doble negacion de null es false 
  let { quote } = [];

  if(!!data){
    quote = data[0].quote;
  };

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({

  });

  useLayoutEffect(() => {
      //saber el tamnio del elemento html despues de ser renderizado
      setBoxSize(pTag.current.getBoundingClientRect());
  }, []);

  // const {author, quote} = !!data && data[0];
  return (
    <>
      <h1>LayoutEffect Hook</h1>
      <hr/>
        
        <blockquote className="blockquote text-right">
          <p className="mb-0" ref={ pTag }> {quote} </p>
        </blockquote>
        <pre>{JSON.stringify(boxSize)}</pre>``
        
      <button className="btn btn-dark" onClick={decrement}>Previous Quote</button>
      <button className="btn btn-warning" onClick={reset}>Reset {counter}</button>
      <button className="btn btn-dark" onClick={increment}>Next Quote</button>
    </>
  );
};
