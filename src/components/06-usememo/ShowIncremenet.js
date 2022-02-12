import React from 'react'
import PropTypes  from "prop-types";

export const ShowIncremenet =React.memo(({ increment }) => {
    //prop increment is a function
    console.log('again!', increment);

    return (
        <>
        <button
        className="btn btn-primary"
        onClick={() => increment( 5 )}
        >Incrementar</button>
            
        </>
    )
});

ShowIncremenet.propTypes = {
    increment: PropTypes.func.isRequired
};

