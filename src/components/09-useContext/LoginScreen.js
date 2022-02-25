import React, { useContext } from 'react'
import { UserContext } from './UseContext';

export const LoginScreen = () => {
  const {setUser} = useContext(UserContext);
  const handleClick = () => {
    setUser({
      name: 'John',
      age: 30,
      id: 1
    })
  }

  return (
    <div>
        <h1>Login Screen</h1>
        <hr/>
        <button
        className={" btn-primary"}
        onClick={handleClick}
        >Login</button>
    </div>
  )
}
