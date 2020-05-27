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

      {props.recipies.map(item => <RecipeCard recipe={item}/>)}
      
      <br />

      <button onClick={()=> history.push(`/add-recipe`)}>
        Add New Recipie
      </button>

      <br />
    </div>
  )
}

const mapStateToProps = state => {
  return{
    recipies: state.recipies
  }
}

export default connect(mapStateToProps, {})(RecipiesList)