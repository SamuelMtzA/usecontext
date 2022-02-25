import React, { useContext } from 'react'
import { UserContext } from './UseContext';

export const AboutScreen = () => {
  const {user, setUser} =useContext(UserContext);

  const handleClick = () => {
    setUser({})
  }

  
  return (


    <div>
        <h1>About Screen</h1>
        <hr/>

        <pre>
          {JSON.stringify(user, null, 2)}
        </pre>

        <button
        className='btn btn-secondary'
        onClick={handleClick}
        >Logout</button>
    </div>
  )
}
       
