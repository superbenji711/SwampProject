import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import './Results.css'

const Results = () => {
    return (
        <div className="recipe">
           <img src="https://www.besthealthmag.ca/wp-content/uploads/2019/07/junk-food-1.gif" alt="food" width="150px" height="100px"/>
           <p>Description</p>
           <ul className="recipeList">
               <li>Ingredient</li>
               <li>Ingredient</li>
               <li>Ingredient</li>
               <li>Ingredient</li>
           </ul>
           <p>Calories</p>
        </div>
    )
}

export default Results;