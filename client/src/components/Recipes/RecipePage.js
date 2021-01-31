import React from "react";
import GridExample from "./recipes_components/GridExample";
import SearchBar from "./recipes_components/SearchBar";
import {Link} from "react-router-dom";
import {GiMagnifyingGlass} from "react-icons/gi";
import './App.css';
import FoodFilters from './recipes_components/FoodFilters'
import Header from './recipes_components/Header'
import Results from './recipes_components/Results'

const RecipePage = () => (
    <div>
        <Link to="/">
            Back to home page
        </Link>
        
        <Header title="The Ultimate Cookbook" />
        <h1>

        </h1>
        <GiMagnifyingGlass style={{float:'left'}}/>
        <SearchBar style={{float:'left'}} />
        
        <FoodFilters />
        <div className="recipes">
            <Results />
            <Results />
            <Results />
            <Results />
            <Results />
        </div>
    </div>
)

export default RecipePage;