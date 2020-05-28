import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'

const userID = window.localStorage.getItem('id')

const blankForm = {
  title: '',
  ingredients: '',
  instructions: '',
  category: '',
  source: '',
  user_id: userID
}

const AddRecipeForm = props => {
  const [recipe, setRecipe] = useState(blankForm)
  const history = useHistory()

  const changeRecipe = e => {
    setRecipe({...recipe, [e.target.name]:e.target.value})
  }

  const submitRecipe = e => {
    axiosWithAuth()
      .post(`api/recipes/${userID}/user`, recipe)
        .then(res => {
          console.log('Post New Recipe Res:', res)
        })
        .catch(err => console.log('Post New Recipe Error:', err.errorMessage))
    history.push('/')
  }

  return(
    <div>
      <h2>Add New Recipe</h2>

      <form onSubmit={submitRecipe}>
        <label>Category:
          <input
            name='category'
            type='text'
            value={recipe.category}
            onChange={changeRecipe}
          />
        </label>

        <br />

        <label>Source:
          <input
            name='source'
            type='text'
            value={recipe.source}
            onChange={changeRecipe}
          />
        </label>

        <br />

        <label>Recipe Name:
          <input
            name='title'
            type='text'
            value={recipe.title}
            onChange={changeRecipe}
          />
        </label>
        
        <br />

        <label>Ingredients:
          <input
            name='ingredients'
            type='text'
            value={recipe.ingredients}
            onChange={changeRecipe}
          />
        </label>

        <br />

        <label>Instructions:
          <input
            name='instructions'
            type='text'
            value={recipe.instructions}
            onChange={changeRecipe}
          />
        </label>

        <br />

        <input
          name='submit'
          type='submit'
          value='Add Recipe!'
        />
          </form>
    </div>
  )
}

export default connect(null, {})(AddRecipeForm)