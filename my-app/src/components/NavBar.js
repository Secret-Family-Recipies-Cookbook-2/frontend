import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import NavStyles from './styles/NavStyles'

const NavBar = () => {

    const token = localStorage.getItem('token')
    let history = useHistory()

    console.log(token)

    return (
        <NavStyles>

            <a href='https://secretfamilyrecipesv2.netlify.app/'>Home</a>
            {
                token ? (
                    <>
                        <button onClick={(evt)=> {
                            evt.preventDefault()
                            localStorage.removeItem('token')
                            history.push('/')
                            window.location.reload()
                        }}>
                            Logout
                        </button>
                     
                        
                    </>
                ):(
                    <>
                        {/* <button onClick={(e) => {
                                e.preventDefault(e)
                                localStorage.setItem('token', 'something')
                                history.push('/')
                                window.location.reload()
                        }}>
                            Login/Register
                        </button> */}
                    </>
                )
            }
        </NavStyles>
    )
}
export default NavBar