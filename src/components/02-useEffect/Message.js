import React, { useEffect, useState } from 'react';

export const Message = () => {

    const [state, setState] = useState({
        x:0,
        y:0
    });

    const {x , y} = state;

    useEffect(() =>{
        const mouseMove = (e) =>{
            const coords = {x: e.x, y: e.y};
            console.log(coords);
            setState( coords )
        };

        window.addEventListener('mousemove', mouseMove);
        
        return () =>{
            window.removeEventListener('mousemove', mouseMove);
        };

    }, []);

    return (
        <div>
            <h3>Eres genial</h3>
            <p>
                x{x} -- y{y}
            </p>
        </div>
    );
};
