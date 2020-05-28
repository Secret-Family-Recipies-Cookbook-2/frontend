import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import RecipeCard from './RecipeCard'
import {useHistory} from 'react-router-dom'
import {getUserRecipes} from '../store/actions/recipeActions.js'

import styled from 'styled-components'

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

    .searchBar {
      width: 40%;
      height: 25px;
      margin: 15px 0;
      text-align: center;
      border: 3px solid #AAAAFF;
      border-radius: 5px;
    }

    .listHeader {
      font-family: 'Kaushan Script', cursive;
      color: #AAAAFF;
    }

    .addBtn {
      width: 150px;
      margin: 0 25%;
      padding: 5px 0;
      border: 3px solid #AAAAFF;
      border-radius: 5px;
      background-color: #0000CC;
      color: white;
    }
`

const RecipiesList = props => {
  const [recipeList, setRecipeList] = useState(props.recipes)
  const [searchTerm, setSearchTerm] = useState('')
  const history = useHistory()

  useEffect(()=>{
    props.getUserRecipes()
  }, [])


  useEffect(() => {
    const result = props.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("Filtered recipes: ", result);
    setRecipeList(result);
  }, [searchTerm]);


  let displayRecipes = [];
  if (searchTerm !== "") {
    displayRecipes = recipeList;
  } else {
    displayRecipes = props.recipes;
  }


  const handleSearch = e => {
    setSearchTerm(e.target.value)
  }

  console.log(props.recipes)

  return(
    <ListStyle>
      <input
        className='searchBar'
        type='text'
        placeholder='Search Recipes by Name'
        value={searchTerm}
        onChange={handleSearch}
      />
      <br />

      <h2 className='listHeader'>My Recipes:</h2>

      {displayRecipes.map(item => <RecipeCard key={item.id} recipe={item}/>)}
      
      <br />

      <button 
        className='addBtn'
        onClick={()=> history.push(`add-recipe/:user_id`)}>
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