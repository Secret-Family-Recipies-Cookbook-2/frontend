import React from 'react'
import {useHistory, useParams} from 'react-router-dom'
import MockCard from './styles/MockCard.js'

const RecipeCard = props => {
  const history = useHistory()
  // const params = useParams()

  return(
    <MockCard>
      <h2>{props.recipe.title}</h2>
      <h4>Category: {props.recipe.category}</h4>
      <h4>Source: {props.recipe.source}</h4>
      <p>Ingredients: {props.recipe.ingredients}</p>
      <p>Instructions: {props.recipe.instructions}</p>
     
      <br />
     
      <button onClick={()=> history.push(`/update-recipe/${props.recipe.id}`)}>
        Edit Recipe
      </button>
     
      <br />
    </MockCard>
  )
}

export default RecipeCard