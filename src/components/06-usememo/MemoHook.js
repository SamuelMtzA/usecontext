import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { hardProcess } from '../helpers/hardprocess';
import '../02-useEffect/effects.css';

export const Memohook = () => {
    const {counter, increment} = useCounter( 1000 );
    const [show, setShow] = useState(true);

    //si el counter cambia, necesito una nueva version memorizada del resultado de la funcion
    const memoProcess = useMemo(() => hardProcess(counter), [counter]);

    return (
        <>
            <h2>MemoHook</h2>
            <h1>Counter: { counter }</h1>
            <hr/>
            <p>{ memoProcess }</p>
            <button className="btn btn-primary" onClick={increment}>Increment</button>
            <button 
            className="btn btn-dark" 
            onClick={() =>{setShow( !show );}}>
                Show/Hide {JSON.stringify( show )}</button>
        </>
    );
};
