import {
  POST_RECIPE_START,
  POST_RECIPE_SUCCESS,
  POST_RECIPE_FAILURE,
  UPDATE_RECIPE_START,
  UPDATE_RECIPE_SUCCESS,
  UPDATE_RECIPE_FAILURE,
  DELETE_RECIPE_START,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_FAILURE
} from '../actions/recipeActions.js'




const initialState = {
  recipes: [],
  isFetching: false,
  isAdding: false,
  isEditing: false,
  isDeleting: false
}

export const recipeReducer = (state = initialState, action) => {
  switch(action.type){
    case POST_RECIPE_START:
      return{
        ...state,
        isAdding: true
      }

    case POST_RECIPE_SUCCESS:
      return{
        ...state,
        recipes: [...state.recipes, action.payload],
        isAdding: false
      }

    case POST_RECIPE_FAILURE:
      return{
        ...state,
        isAdding: false
      }

    case UPDATE_RECIPE_START:
      return{

      }

    case UPDATE_RECIPE_SUCCESS:
      return{

      }

    case UPDATE_RECIPE_FAILURE:
      return{

      }

    case DELETE_RECIPE_START:
      return{
        ...state,
        isDeleting: true
      }

    case DELETE_RECIPE_SUCCESS:
      return{
        ...state,
        recipies: state.recipes.filter(item => item.id !== action.payload.id), // payload.id??? or just payload???
        isDeleting: false
      }

    case DELETE_RECIPE_FAILURE:
      return{
        ...state,
        isDeleting: false
      }

    default: return state
  }
}