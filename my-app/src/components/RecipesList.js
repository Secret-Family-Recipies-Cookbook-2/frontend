import React from 'react'
import {connect} from 'react-redux'
import RecipeCard from './RecipeCard'
import {useHistory, Link, useParams} from 'react-router-dom'

const RecipiesList = props => {
  const history = useHistory()
  const params = useParams()

  return(
    <div>
      <h2>My Recipies:</h2>

      {props.recipes.map(item => <RecipeCard recipe={item}/>)}
      
      <br />

      <button onClick={()=> history.push(`add-recipe/:user_id`)}>
        Add New Recipie
      </button>

      <br />
    </div>
  )
}

const mapStateToProps = state => {
  return{
    recipes: state.recipes
  }
}

export default connect(mapStateToProps, {})(RecipiesList)