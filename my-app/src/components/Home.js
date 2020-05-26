import React from 'react'
import Register from './Register'
import Login from './Login'

const Home = () => {

    let token = localStorage.getItem('token')

    return (
        <>
            {/* {
                !token && (
                    <section className='login'>
                        <article>
                            <Login />
                        </article>
                        <article>
                            <Register />
                        </article>
                    </section>
            )} */}
        </>
    )
}
export default Home