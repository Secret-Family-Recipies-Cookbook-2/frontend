import React from 'react'
import {connect} from 'react-redux'
import RecipeCard from './RecipeCard'

const RecipiesList = props => {
  return(
    <div>
      <h2>All Recipies:</h2>

      {props.recipies.map(item => <RecipeCard recipe={item}/>)}
    </div>
  )
}

const mapStateToProps = state => {
  return{
    recipies: state.recipies
  }
}

export default connect(mapStateToProps, {})(RecipiesList)