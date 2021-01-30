import React, { Component, useState } from 'react';
import './NavBar.css';
// import {
//     Button,
//     Menu,
//     Dropdown,
//     Checkbox
// } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../views/Home';
import Profile from '../views/Profile';

const NavBar = (props) => {
    return (
        <Component>
          
            <h1><Link to={'/'} className="nav-link"> Home </Link></h1>
            <h1><Link to={'/Profile'} className="nav-link">Profile</Link></h1>
        
        </Component>


    )
}
export default NavBar;

