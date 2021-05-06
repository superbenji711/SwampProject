import React, { Component, useState } from 'react';
import './navbar.css';
import { Grid, Segment, Button, ButtonGroup } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../views/Home';
import Profile from '../views/Profile';
import RecipePage from '../views/RecipePage';

const navbar = (props) => {
    return (
        <div className={'container'}>

            
            <Grid columns='equal' divided inverted padded>
                <Grid.Row>
                    
                    <Grid.Column >
                        {/* <Button className={'button1'} active inverted color={""}> */}
                            <h2>
                                <Link active to={'/'} >
                                    Home
                                </Link>
                            </h2>
                        {/* </Button> */}
                    </Grid.Column>
                    <Grid.Column className={'button1'}>
                        <Button className={'button1'}>
                            <h2>
                                <Link to={'/Profile'}>
                                    Profile
                                </Link>
                            </h2>
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button className={'button1'}>
                            <h2>
                                <Link to={'/recipes'} className="nav-link">
                                    Recipes
                                </Link>
                            </h2>
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button className={'button1'}>
                            <h2>
                                <Link to={'/login'} className="nav-link">
                                    LogIn
                                </Link>
                            </h2>
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>

    )
}
export default navbar;

