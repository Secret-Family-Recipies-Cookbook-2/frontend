import React, {useState, useEffect}from 'react'
import MockRecipe from './MockRecipe'
import axios from 'axios'

const Home = () => {
    const [mockRecipes, setMockRecipies]= useState([])
    //let token = localStorage.getItem('token')

    const getMockData = () => {

        //axios without auth
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
            

            <h2>Start Collecting Recipes Like These Now!</h2>
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