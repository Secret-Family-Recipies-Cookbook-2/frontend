import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import * as yup from 'yup'

import axios from 'axios'

import LoginCard from './styles/LoginCard'
import axios from 'axios'


const initialState= {
    username: '',
    password: '',
}

const initialFormErrors={
    username: '',
    password: '',
}

const loginSchema = yup.object().shape({
    username: yup.string()
        .min(3, 'Username must be at least 3 characters long')
        .required('Username is a required field'),
    password: yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .required('Password is a required field')
    
})

const Login = () => {
    
    let history = useHistory()

    const [loginData, setLoginData] = useState(initialState)
    const [loginFormErrors, setLoginFormErrors] = useState(initialFormErrors)
    const [buttonEnabled, setButtonEnabled] = useState(false)


    useEffect(() => {
        loginSchema.isValid(loginData).then((valid) => {
            setButtonEnabled(valid)
        })
    }, [loginData])

    const loginChangeHandler = (evt) => {

        evt.persist()
        setLoginData({...loginData, [evt.target.name]: evt.target.value})

        yup
            .reach(loginSchema, evt.target.name)
            .validate(evt.target.value)
            .then((valid) => {
                setLoginFormErrors({...loginFormErrors, [evt.target.name]: ''})
            })
            .catch((err) => {
                setLoginFormErrors({
                    ...loginFormErrors,
                    [evt.target.name]: err.errors[0]
                })
            })
    }

    const loginHandler = (evt) => {
        evt.preventDefault()
        // console.log(JSON.stringify(loginData))
        // localStorage.setItem('token', JSON.stringify(loginData))
        // history.push('/')
        // window.location.reload()


        axios
            .post('https://secretfamilyrecipes3.herokuapp.com/api/auth/login', loginData)
            .then(res => {
                console.log('Login Res:', res)
                localStorage.setItem('token', res.data.token)
                history.push('/')
            })
            .catch(err => console.log('Login Error:', err.message))
    }
    
    return (
        <>
            <LoginCard>
                <form onSubmit={(evt)=>loginHandler(evt)}>
                    <label>Username</label>
                    <input 
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={loginData.username}
                        onChange={(evt)=> loginChangeHandler(evt)}
                    />

                    <label>Password</label>
                    <input 
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={loginData.password}
                        onChange={(evt)=> loginChangeHandler(evt)}
                    />

                    <button disabled={!buttonEnabled} type='submit'>Login</button>
                    <div className='errors-container'>
                        <div className='form-errors'>{loginFormErrors.username}</div>
                        <div className='form-errors'>{loginFormErrors.email}</div>
                        <div className='form-errors'>{loginFormErrors.password}</div>
                    </div>
                </form>
                <div className='no-account'>
                    Don't have an account?&nbsp;
                    <Link className='register-link' to='/register'>Click Here</Link>
                </div>
            </LoginCard>
            
        </>
    )
}
export default Login