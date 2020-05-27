import React from 'react'
import {useHistory} from 'react-router-dom'

const RecipeCard = props => {
  const history = useHistory()

  return(
    <div>
      <h3>{props.recipe.title}</h3>
      <h4>Category: {props.recipe.category}</h4>
      <h4>Source: {props.recipe.source}</h4>
      <p>Ingredients: {props.recipe.ingredients}</p>
      <p>Instructions: {props.recipe.instructions}</p>
     
      <br />
     
      <button onClick={()=> history.push('/update-recipe')}>
        Edit Recipe
      </button>
     
      <br />
    </div>
  )
}

export default RecipeCard