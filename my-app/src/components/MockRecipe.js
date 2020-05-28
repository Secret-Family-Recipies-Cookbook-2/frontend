import React from 'react'
import MockCard from './styles/MockCard'
import styled from 'styled-components'

const MockRecipe = ({details}) => {
    if(!details){
        return <h3>Working on fetching details</h3>
    }

    return(
        
        <MockCard>
            <h2>{details.title}</h2>
            <h4>Category: {details.category}</h4>
            <h4>Source: {details.source}</h4>
            <p>Ingredients:{details.ingredients}</p>
            <p>Instructions:{details.instructions}</p>
         </MockCard>
        
    )
}
export default MockRecipe