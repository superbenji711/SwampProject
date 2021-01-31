import React, {Component, useState} from 'react';
import Header from '../components/Recipes/recipes_components/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

export default class Profile extends React.Component{
    constructor() {
        super();

        this.state= {
            loggedInStatus: "Not logged in",
            user: {}
        };

        this.handleLogin = this.handleLogin.bind(this);
    }

    checkLoginStatus() {
        axios.get("http://localhost:3001/logged_in", {withCredentials:true})
        .then(response => {
            if (response.data.logged_in && this.state.loggedInStatus == "Not logged in") { //If user is logged in but system says they aren't,change their status to logged in
                this.setState({
                    loggedInStatus: "Logged in",
                    user: response.data.user
                })
            }
            else if (!response.data.logged_in & this.state.loggedInStatus == "Logged in") { //If user is logged out but system says they are, change their status to not logged in
                this.setState({
                    loggedInStatus: "Not logged in",
                    user: {}
                })
            }
        })
        .catch(error => {
            console.log("check login error", error);
        })
    }

    handleLogin(data) {
        this.setState({
            loggedInStatus: "Logged in",
            user: data.user
        });
    }

    render() {
        
    return (
        <div>
            <Header title="Your Profile" />
        </div>
    );
    }
}

