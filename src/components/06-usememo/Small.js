import React, { memo } from 'react'

export const Small = memo((props) => {
    //memo usado para memorizar, si las props son iguales no se renderiza
    const {value} = props;
    console.log('Small render', value);

    return (
        <small>
            {value}
        </small>
    );
})
