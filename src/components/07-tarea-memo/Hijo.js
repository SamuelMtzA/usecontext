import React from 'react'
// Esto significa que React omitirá renderizar el componente y reusará el último resultado renderizado.
export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');
    console.log('  props: ', incrementar);

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    );
});
