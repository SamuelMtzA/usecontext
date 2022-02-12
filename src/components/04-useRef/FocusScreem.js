import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreem = () => {
    // En esencia, useRef es como una “caja” que puedes mantener en una variable mutable en su propiedad .current.
    const inputRef = useRef(0);

    const handleClick = () => {
        inputRef.current.select();
        // document.querySelector('input').select();
        console.log(inputRef.current.value);
    };

    return (
        <>
            <h1> Focus Screen </h1>
            <hr/> 

            <input
                ref={inputRef}
                className='form-control'
                placeholder="Your name"
            />
            <button 
            className="btn btn-outline-dark mt-5"
            onClick={ handleClick }
            >Focus</button>
        </>
    );
};
