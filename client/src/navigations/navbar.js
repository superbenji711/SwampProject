import React, { Component, useState } from 'react';
import './navbar.css';
import { Grid, Segment, Button } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../views/Home';
import Profile from '../views/Profile';
import RecipePage from '../views/RecipePage';

const NavBar = (props) => {
    return (
        <div>

            <Grid relaxed='very' columns={4}>
                <Grid.Row>
                    <Grid.Column>
                        <Button>
                            <h2>
                                <Link to={'/'} className="nav-link">
                                    Home
                                </Link>
                            </h2>
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button>
                            <h2>
                                <Link to={'/Profile'} className="nav-link">
                                    Profile
                                </Link>
                            </h2>
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button>
                            <h2>
                                <Link to={'/recipes'} className="nav-link">
                                    Recipes
                                </Link>
                            </h2>
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button>
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
export default NavBar;

