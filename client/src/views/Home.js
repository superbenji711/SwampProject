import React, { Component, useState } from 'react';
import { Segment } from 'semantic-ui-react';
import {Link} from "react-router-dom";
import Header from '../components/Recipes/recipes_components/Header';
import Book from '../components/images/recipe_book.jpeg';
import './Home.css';

export default class Home extends React.Component {

    render() {
        const recepies = ["red", "blue", "green", "yellow"]
        return (
            <div>
                {/* <Segment>

                    {recepies.map((recepie) => {
                        <h2 className="text">{recepie}</h2>
                    })}

                </Segment> */}

                <Header title="Welcome to EZPZ Recipe!" />

                <h1> </h1>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                    }}>
                    <img 
                        className='center-image'
                        color='orange'
                        src={Book} 
                        alt="recipe book" 
                    />
                </div>

                <h1 
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    The best web-app for all of your culinary curiosity!
                </h1>

                <h1 
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    About Us
                </h1>
                <u1>
                    We're just a small group of developers who wanted to simplify your cooking experience. Have you ever had trouble
                    deciding what to eat/cook? And then when you do find a recipe to make, it doesn't fit your schedule? Well that's
                    where our web-app comes in! It simplifies your decision-making process by offering you a wide selection of different
                    recipes that can suit your taste, time, and allergies.
                </u1>
            </div>
        );
    }
}

// export default Home;