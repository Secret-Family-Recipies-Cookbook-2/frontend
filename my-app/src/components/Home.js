import React, {useState, useEffect}from 'react'
import {useHistory} from 'react-router-dom'
import MockRecipe from './MockRecipe'
import axios from 'axios'


const Home = () => {
    const [mockRecipes, setMockRecipies]= useState([])
    //let token = localStorage.getItem('token')

    const history = useHistory()

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

        <div className='home-container'>


            <br />

           <h2>Start Collecting Recipes Like These Now!</h2>
                {
                mockRecipes.map(recipe => {
                    return (
                        <MockRecipe key={recipe.id} details={recipe}/>
                    )
                })  
                }
        </div>
    )
}
export default Home