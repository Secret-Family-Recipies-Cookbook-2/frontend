import React, {useState, useEffect}from 'react'
import Register from './Register'
import Login from './Login'
import MockRecipe from './MockRecipe'
import axios from 'axios'

const Home = () => {
    const [mockRecipes, setMockRecipies]= useState([])
    //let token = localStorage.getItem('token')

    const getMockData = () => {
        axios.get('https://secretfamilyrecipes3.herokuapp.com/api/mock')
            .then(res => {
                console.log(res)
                setMockRecipies(res.data)
            })
            .catch(err => {
                console.log('axios not getting data')
            })
    }

    useEffect(() => {
        getMockData()
    }, [])
    return (
        <>

            {
              mockRecipes.map(recipe => {
                  return (
                      <MockRecipe key={recipe.id} details={recipe}/>
                  )
              })  
            }
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