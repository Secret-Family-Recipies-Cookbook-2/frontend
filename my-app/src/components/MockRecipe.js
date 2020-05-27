import React from 'react'

const MockRecipe = ({details}) => {
    if(!details){
        return <h3>Working on fetching details</h3>
    }

    return(
        <div className='recipe-container'>
            <h2>{details.title}</h2>
            <h4>Category: {details.category}</h4>
            <h4>Source: {details.source}</h4>
            <p>Ingredients:{details.ingredients}</p>
            <p>Instructions:{details.instructions}</p>
        </div>
   
    )
}
export default MockRecipe