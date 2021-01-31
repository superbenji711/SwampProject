import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import './Results.css'

const Results = (props) => {
    return (
        <div className="recipe">
           <img src={props.image} alt="food" width="150px" height="100px"/>
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
Results.defaultProps = {
    image: "https://www.besthealthmag.ca/wp-content/uploads/2019/07/junk-food-1.gif",
}

export default Results

{/* <Grid columns={3} divided>
                <Grid.Row>
                <Grid.Column>
                    <Image src='https://www.besthealthmag.ca/wp-content/uploads/2019/07/junk-food-1.gif' className="GridPic"/>
                    <h3>Ingredients</h3>
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://www.besthealthmag.ca/wp-content/uploads/2019/07/junk-food-1.gif' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='/https://www.besthealthmag.ca/wp-content/uploads/2019/07/junk-food-1.gif' />
                </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                <Grid.Column>
                    <Image src='https://www.besthealthmag.ca/wp-content/uploads/2019/07/junk-food-1.gif' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://www.besthealthmag.ca/wp-content/uploads/2019/07/junk-food-1.gif' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='/https://www.besthealthmag.ca/wp-content/uploads/2019/07/junk-food-1.gif' />
                </Grid.Column>
                </Grid.Row>
            </Grid> */}