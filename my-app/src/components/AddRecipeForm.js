import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'
import RecipeForms from './styles/RecipeForms'

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
    e.preventDefault()
    setRecipe({...recipe, [e.target.name]:e.target.value})
  }

  const submitRecipe = e => {
    e.preventDefault()
    axiosWithAuth()
      .post(`api/recipes/${userID}/user`, recipe)
        .then(res => {
          console.log('Post New Recipe Res:', res)
        })
        .catch(err => console.log('Post New Recipe Error:', err))
    history.push('/')
  }

  return(
    <RecipeForms>
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
        <textarea
            cols='25'
            rows='4'
            name='ingredients'
            type='text'
            value={recipe.ingredients}
            onChange={changeRecipe}
          />
        </label>

        <br />

        <label>Instructions:
        <textarea
            cols='25'
            rows='4'
            name='instructions'
            type='text'
            value={recipe.instructions}
            onChange={changeRecipe}
          />
        </label>

        <br />

        <input
          className='submitBtn'
          name='submit'
          type='submit'
          value='Add Recipe!'
        />
          </form>
    </RecipeForms>
  )
}

export default AddRecipeForm