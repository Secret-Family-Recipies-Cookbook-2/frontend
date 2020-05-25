import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Register = () => {
    
    let history = useHistory()
    const [registerData, setRegisterData] = useState({username: '', password: '', email: ''})
    
    const registerChangeHandler = (evt) => {
        setRegisterData({...registerData, [evt.target.name]: evt.target.value})
    }

    const registerHandler = (evt) => {
        evt.preventDefault()
        console.log(JSON.stringify(registerData))
        localStorage.setItem("token", JSON.stringify(registerData))
        history.push('/')
        //window.location.reload
    }

    return (
        <>
            <form onSubmit={(evt)=> registerHandler(evt)}>
                <label>Username</label>
                <input 
                    type='text'
                    name='username'
                    value={registerData.username}
                    onChange={(evt)=> registerChangeHandler(evt)}
                />
                <label>Email</label>
                <input 
                    type='text'
                    name='email'
                    value={registerData.email}
                    onChange={(evt)=> registerChangeHandler(evt)}
                />

                <label>Password</label>
                <input 
                    type='password'
                    name='password'
                    value={registerData.passwod}
                    onChange={(evt)=> registerChangeHandler(evt)}
                />

                <button type='submit'>Register</button>
            </form>
        </>
    )
}
export default Register