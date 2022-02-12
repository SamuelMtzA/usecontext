import React, { useState } from 'react'
import { MultipleCustomHooks } from '../examples/MultipleCustomHooks'
import '../02-useEffect/effects.css'

export const RealExampleRef = () => {
    const [show, setshow] = useState(false)

    return (
        <>
            <h1>useRef Hook</h1>
            <hr/>

            {show && <MultipleCustomHooks/>}
            <button
            className="btn btn-primary mt-5"
            onClick={() => setshow(!show)}
            >Show/Hide</button>
        </>
    )
}

