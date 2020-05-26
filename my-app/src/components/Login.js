import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

const initialState= {
    username: '',
    password: '',
}

const initialFormErrors={
    username: 'Username is required',
    password: 'Password is required',
}

const Login = () => {
    
    let history = useHistory()

    const [loginData, setLoginData] = useState({username: '', password: ''})

    const loginChangeHandler = (evt) => {
        setLoginData({...loginData, [evt.target.name]: evt.target.value})
    }

    const loginHandler = (evt) => {
        evt.preventDefault()
        console.log(JSON.stringify(loginData))
        localStorage.setItem('token', JSON.stringify(loginData))
        history.push('/')
        window.location.reload()
    }
    
    return (
        <div className='login-container'>
            <form onSubmit={(evt)=>loginHandler(evt)}>
                <label>Username</label>
                <input 
                    type='text'
                    name='username'
                    value={loginData.username}
                    onChange={(evt)=> loginChangeHandler(evt)}
                />

                <label>Password</label>
                <input 
                    type='password'
                    name='password'
                    value={loginData.password}
                    onChange={(evt)=> loginChangeHandler(evt)}
                />

                <button type='submit'>Login</button>
            </form>

        </div>
    )
}
export default Login