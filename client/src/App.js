import './App.css';
import FoodFilters from './FoodFilters'
import Header from './Header'
import Results from './Results'
import { Grid, Image } from 'semantic-ui-react'


function App() {
  return (
    <div>
      <Header title="The Ultimate Cookbook" />
      <FoodFilters />
      <div className="recipes">
        <Results className="recipeItem" image="https://littlesunnykitchen.com/wp-content/uploads/Air-Fryer-chicken-breast-recipe-13.jpg"/>
        <Results className="recipeItem" image="https://www.cookingclassy.com/wp-content/uploads/2020/09/chess-pie-2-600x900.jpg"/>
        <Results className="recipeItem"/>
        <Results className="recipeItem"/>
        <Results className="recipeItem"/>
        <Results className="recipeItem"/>
        <Results className="recipeItem"/>
      </div>
    </div>
  );
}

export default App;