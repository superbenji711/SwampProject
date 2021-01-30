import React from "react";
import {Link} from "react-router-dom";

const HomePage = () => (
    <div>
        <h1>
            Home Page
        </h1>
        <h1>
            Login Page
        </h1>
        <Link to="/login">
            Link
        </Link>
        <h1>
            Recipes Page
        </h1>
        <Link to="/recipes">
            To Recipes
        </Link>
    </div>
)

export default HomePage;