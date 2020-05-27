import {axiosWithAuth} from '../../utils/axiosWithAuth.js'
// import {useParams} from 'react-router-dom'

export const POST_RECIPE_START = 'POST_RECIPE_START'
export const POST_RECIPE_SUCCESS = 'POST_RECIPE_SUCCESS'
export const POST_RECIPE_FAILURE = 'POST_RECIPE_FAILURE'

// export const postRecipe = newRecipe => {
//   const params = useParams()
//   return dispatch => {
//     dispatch({type: POST_RECIPE_START})
//     axiosWithAuth()
//       .post(`api/recipes/${params.id}/user`, newRecipe)
//       .then(res => console.log('Post new recipe Res:', res))
//       .catch(err => console.log('Post New Recipe Error:', err))
//   }
// }



export const UPDATE_RECIPE_START = 'UPDATE_RECIPE_START'
export const UPDATE_RECIPE_SUCCESS = 'UPDATE_RECIPE_SUCCESS'
export const UPDATE_RECIPE_FAILURE = 'UPDATE_RECIPE_FAILURE'



export const DELETE_RECIPE_START = 'DELETE_RECIPE_START'
export const DELETE_RECIPE_SUCCESS = 'DELETE_RECIPE_SUCCESS'
export const DELETE_RECIPE_FAILURE = 'DELETE_RECIPE_FAILURE'


export const deleteRecipe = recipe => {
  return dispatch => {
    dispatch({type: DELETE_RECIPE_START})
    axiosWithAuth()
      .delete(`/api/recipes/${recipe.id}`)
      .then(res => {
        console.log('Delete Recipe Res:', res)
        // dispatch({type: DELETE_RECIPE_SUCCESS, payload: })
      })
      .catch(err => {
        console.log('Delete Recipe Error:', err)
        dispatch({type: DELETE_RECIPE_FAILURE})
      })
  }
};
