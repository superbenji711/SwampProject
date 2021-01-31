import React from "react";
import {Link} from "react-router-dom";


const HomePage = () => (
    <div>
        <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            Home Page
        </h1>
        <h1>
            Login Page
        </h1>
        <Link to="/login">
            LOGIN
        </Link>
        <h1>
            Recipes Page
        </h1>
        <Link to="/recipes">
            Recipes
        </Link>
    </div>
)

export default HomePage;