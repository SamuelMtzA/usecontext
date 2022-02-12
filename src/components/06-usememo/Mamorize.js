import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
import '../02-useEffect/effects.css';

export const Mamorize = () => {
    const {counter, increment} = useCounter( 10 );

    const [show, setShow] = useState(true);

    return (
        <>
            <h1>Counter: <Small value={counter}/></h1>
            <hr/>
            <button className="btn btn-primary" onClick={increment}>Increment</button>
            <button 
            className="btn btn-dark" 
            onClick={() =>{setShow( !show );}}>
                Show/Hide {JSON.stringify( show )}</button>
        </>
    );
};
