import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
// import Login from './Login'
// import SignupForm from './Signup'

export default function Auth({onLogin}) {

    const [login, setLogin] = useState(true)

    function handleClick(e) {
        e.preventDefault()
        setLogin(!login)
    }

    return (
        <div>
            {login ? <Login handleClick={handleClick}  onLogin={onLogin}/> : <Signup handleClick={handleClick} onLogin={onLogin}/>}
        </div>
    )
}
