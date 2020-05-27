import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth.js'
import {UPDATE_RECIPE_SUCCESS} from '../store/actions/recipeActions.js'

const blankForm = {
  title: '',
  ingredients: '',
  instructions: '',
  category: '',
  source: ''
}

const UpdateRecipeForm = props => {
  const [recipeInfo, setRecipeInfo] = useState(blankForm)
  const params = useParams()

  useEffect(()=>{
    axiosWithAuth()
      .get(`api/recipes/${params.id}`)
      .then(res => {
        console.log('Update Recipe Get Request:', res)
        setRecipeInfo(res.data)
      })
      .catch(err => {
        console.log('Update Recipe Get Request:', err)
      })
  })

  const updateRecipe = e => {
    setRecipeInfo({...recipeInfo, [e.target.name]:e.target.value})
  }

  const submitUpdate = e => {
    e.preventDefault()

    axiosWithAuth
    .put(`api/recipes/${params.id}`, recipeInfo)
    .then(res => {
      console.log(res)
      dispatchEvent({type: UPDATE_RECIPE_SUCCESS})
      // history.push(`/movies/${params.id}`)
    })
    .catch(err => console.log(err))

  }

  return(
    <div>
      <h1>Update Recipe:</h1>

      <form>
        <label>Category:
          <input
            name='category'
            type='text'
            value={recipeInfo.category}
            onChange={updateRecipe}
          />
        </label>

        <br />

        <label>Source:
          <input
            name='source'
            type='text'
            value={recipeInfo.source}
            onChange={updateRecipe}
          />
        </label>

        <br />

        <label>Recipe Name:
          <input
            name='title'
            type='text'
            value={recipeInfo.title}
            onChange={updateRecipe}
          />
        </label>
        
        <br />

        <label>Ingredients:
          <input
            name='ingredients'
            type='text'
            value={recipeInfo.ingredients}
            onChange={updateRecipe}
          />
        </label>

        <br />

        <label>Instructions:
          <input
            name='instructions'
            type='text'
            value={recipeInfo.instructions}
            onChange={updateRecipe}
          />
        </label>

        <br />

        <input
          name='submit'
          type='submit'
          value='Update Recipe'
        />
      </form>
    </div>
  )
}

export default UpdateRecipeForm