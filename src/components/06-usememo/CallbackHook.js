import React, { useCallback, useState } from 'react'
import '../02-useEffect/effects.css';
import { ShowIncremenet } from './ShowIncremenet';


export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);
    //contsnate en memoria, es un objeto.
   /*  const increment = () => {
        setcounter(counter + 1);
    }; */
    // devolverá una versión memorizada del callback que solo cambia si una de las dependencias ha cambiado
    const increment = useCallback((num) => 
        {
        setCounter(c => c + num);
        }, [setCounter]);


    return (
        <>
         <h1>Usecallback hook: {counter}</h1>
         <hr/>   

         <ShowIncremenet increment={increment}/>

        </>
    );
};
