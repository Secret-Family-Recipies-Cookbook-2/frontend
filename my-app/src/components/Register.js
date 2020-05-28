import React, {useState, useEffect} from 'react'
import { useHistory, Link } from 'react-router-dom'
import * as yup from 'yup'
import axios from 'axios'
import LoginCard from './styles/LoginCard'


const initialState = {
    username: '',
    password: '',
    email: '',
    
}
const initialFormErrors = {

    username:'',
    password:'',
    email:''

}

const registerSchema = yup.object().shape({

    username: yup
        .string()
        .min(3, 'Username must be at least 3 characters long')
        .required('Username is a required field'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .required('Password is a required field') ,
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is a required field')  

});

const Register = () => {
    
    let history = useHistory()
    const [registerData, setRegisterData] = useState(initialState)
    const [registerFormErrors, setRegisterFormErrors] = useState(initialFormErrors)
    const [buttonEnabled, setButtonEnabled] = useState(false)

    useEffect(() => {
        registerSchema.isValid(registerData)
            .then(valid => {
                setButtonEnabled(valid)
            })
    },[registerData])
    
    const registerChangeHandler = (evt) => {
        evt.persist()

        yup 
            .reach(registerSchema, evt.target.name)
            .validate(evt.target.value)
            .then(valid => {
                setRegisterFormErrors({...registerFormErrors, [evt.target.name]:''})
            })
            .catch(err => {
                setRegisterFormErrors({...registerFormErrors, 
                [evt.target.name]: err.errors[0]
                })
            })
        setRegisterData({...registerData, [evt.target.name]: evt.target.value})
    }

    const registerHandler = (evt) => {
        evt.preventDefault()
        // console.log(JSON.stringify(registerData))
        // localStorage.setItem("token", JSON.stringify(registerData))
        // history.push('/')
        // window.location.reload()

        axios 
            .post('https://seccretfamilyrecipes3.herokuapp.com/api/auth/register', registerData)
            .then(res => {
                console.log('Post New User Res:', res)
                window.localStorage.setItem('id', res.data.data.id)
                history.push('/login')
            })
            .catch(err => console.log('Post New User Error:'))
    }

    return (
        <LoginCard>
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
                    value={registerData.password}
                    onChange={(evt)=> registerChangeHandler(evt)}
                />

                <button disabled={!buttonEnabled} type='submit'>Register</button>
                <div className='errors-container'>
                    <div className='form-errors'>{registerFormErrors.username}</div>
                    <div className='form-errors'>{registerFormErrors.email}</div>
                    <div className='form-errors'>{registerFormErrors.password}</div>
                </div>
            </form>

            <div className='no-account'>
                Already have an account?&nbsp;
                <Link className='login-link' to='/login'>Click Here</Link>
            </div>
        </LoginCard>
    )
}
export default Register