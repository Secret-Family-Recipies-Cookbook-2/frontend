import React from 'react'
import { useHistory, Link } from 'react-router-dom'

const NavBar = () => {

    const token = localStorage.getItem('token')
    let history = useHistory()

    console.log(token)

    return (
        <nav>
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
                        <Link to='/'>placeholder for logged in menu items</Link>
                    </>
                ):(
                    <>
                        {/* <button onClick={(e) => {
                                e.preventDefault(e)
                                localStorage.setItem('token', 'something')
                                history.push('/')
                                window.location.reload()
                        }}>
                            Login
                        </button> */}
                    </>
                )
            }
        </nav>
    )
}
export default NavBar