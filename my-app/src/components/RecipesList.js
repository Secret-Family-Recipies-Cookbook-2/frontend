import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import RecipeCard from './RecipeCard'
import {useHistory} from 'react-router-dom'
import {getUserRecipes} from '../store/actions/recipeActions.js'

import styled from 'styled-components'

const ListStyle = styled.div`
  .listHeader {
    font-family: 'Kaushan Script', cursive;
  }
`

const RecipiesList = props => {
  const history = useHistory()

  useEffect(()=>{
    props.getUserRecipes()
  }, [])

  console.log(props.recipes)

  return(
    <ListStyle>
      <br />

      <h2 className='listHeader'>My Recipes:</h2>

      {props.recipes.map(item => <RecipeCard key={item.id} recipe={item}/>)}
      
      <br />

      <button onClick={()=> history.push(`add-recipe/:user_id`)}>
        Add New Recipe
      </button>

      <br />
    </ListStyle>
  )
}

const mapStateToProps = state => {
  return{
    recipes: state.recipes
  }
}

export default connect(mapStateToProps, {getUserRecipes})(RecipiesList)