import React, { useState } from 'react';
import './NavBar.css';
//import logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';
import {
    Button,
    Menu,
    Dropdown,
    Checkbox
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const NavBar = (props) => {
    return (
        <div className="header">
            <div className="nav-bars">
                <Dropdown
                    icon='bars'
                    floating
                    className='DropIcon'
                >
                </Dropdown>
            </div>
        </div>

    )
}

export default NavBar;

