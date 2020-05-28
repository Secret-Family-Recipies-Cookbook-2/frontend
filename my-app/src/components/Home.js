import React, {useState, useEffect}from 'react'
import {useHistory} from 'react-router-dom'
import MockRecipe from './MockRecipe'
import axios from 'axios'
import styled from 'styled-components'

const HomeStyles = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   
    .label{
        font-family: 'Kaushan Script', cursive;
        color: #AAAAFF;
    }
`


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

        <HomeStyles>


            <br />

           <h2 className='label'>Start Collecting Recipes Like These Now!</h2>
                {
                mockRecipes.map(recipe => {
                    return (
                        <MockRecipe key={recipe.id} details={recipe}/>
                    )
                })  
                }
        </HomeStyles>
    )
}
export default Home