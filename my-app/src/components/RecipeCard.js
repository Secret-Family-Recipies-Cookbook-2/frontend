import React from 'react'

const RecipeCard = props => {
  return(
    <div>
      <h3>{props.recipe.title}</h3>
      <h4>Category: {props.recipe.category}</h4>
      <h4>Source: {props.recipe.source}</h4>
      <p>{props.recipe.ingredients}</p>
      <p>{props.recipe.instructions}</p>
    </div>
  )
}

export default RecipeCard