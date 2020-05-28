import React, {useState} from 'react'
import MockCard from './styles/MockCard'
import styled from 'styled-components'

const MockRecipe = ({details}) => {
   const [showDetails, setShowDetails] = useState(false)

   const toggleDetails = evt => {
       evt.preventDefault()
       setShowDetails(!showDetails)
   }
   
    if(!details){
        return <h3>Working on fetching details</h3>
    }

    return(
        
        <MockCard>
            <h2>{details.title}</h2>
            <h4>Category: {details.category}</h4>
            <h4>Source: {details.source}</h4>

            <button onClick={evt => {toggleDetails(evt)}}>
                {
                    showDetails ? 'Hide Details':'Show Details'
                }
            </button>
            {
                showDetails && (
                    <>
                        <p>Ingredients:{details.ingredients}</p>
                        <p>Instructions:{details.instructions}</p>
                    </>
                )
            }
          
         </MockCard>
        
    )
}
export default MockRecipe