import React from "react";
import SearchBar from "../components/Recipes/recipes_components/SearchBar";
import {Link} from "react-router-dom";
import {GiMagnifyingGlass} from "react-icons/gi";
import './RecipePage.css';
import FoodFilters from '../components/Recipes/recipes_components/FoodFilters'
import Header from '../components/Recipes/recipes_components/Header'
import Results from '../components/Recipes/recipes_components/Results'

const RecipePage = () => (
    <div>
        <Link to="/">
            Back to home page
        </Link>

        <Header title="The Ultimate Cookbook" />
        <h1>

        </h1>
        
        
        <FoodFilters />
        <div>
            <Results />
        </div>
    </div>
)

export default RecipePage;