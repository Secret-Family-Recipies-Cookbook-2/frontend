import React, {useEffect, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth.js'
import RecipeForms from './styles/RecipeForms.js'

const userID = window.localStorage.getItem('id')

const blankForm = {
  title: '',
  ingredients: '',
  instructions: '',
  category: '',
  source: '',
  user_id: userID
}

const UpdateRecipeForm = props => {
  const [recipeInfo, setRecipeInfo] = useState(blankForm)
  const history = useHistory()
  const params = useParams()

  useEffect(()=>{
    axiosWithAuth()
      .get(`api/recipes/${params.id}`)
      .then(res => {
        console.log('Update Recipe Get Request:', res)
        setRecipeInfo(res.data[0])
      })
      .catch(err => {
        console.log('Update Recipe Get Request:', err)
      })
  }, [])

  const updateRecipe = e => {
    e.preventDefault()
    setRecipeInfo({...recipeInfo, [e.target.name]:e.target.value})
  }

  const submitUpdate = e => {
    e.preventDefault()

    axiosWithAuth()
      .put(`api/recipes/${params.id}`, recipeInfo)
      .then(res => {
        console.log('Submit Update Res:', res)
        history.push(`/`)
      })
      .catch(err => console.log(err))
  }

  const deleteRecipe = e => {
    axiosWithAuth()
      .delete(`api/recipes/${params.id}`)
      .then(res => {
        console.log('Delete Recipe Res:', res)
      })
      .catch(err => console.log(err))
    history.push('/')
  }

  return(
    <RecipeForms>
      <h1>Update Recipe:</h1>

      <form onSubmit={submitUpdate}>
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
          <textarea
            cols='25'
            rows='4'
            name='ingredients'
            type='text'
            value={recipeInfo.ingredients}
            onChange={updateRecipe}
          />
        </label>

        <br />

        <label>Instructions:
          <textarea
            cols='25'
            rows='4'
            name='instructions'
            type='text'
            value={recipeInfo.instructions}
            onChange={updateRecipe}
          />
        </label>

        <br />

        <input
          className='submitBtn'
          name='submit'
          type='submit'
          value='Update Recipe'
        />
      </form>
      <br />
      <button onClick={deleteRecipe}>Delete Recipe</button>
    </RecipeForms>
  )
}

export default UpdateRecipeForm