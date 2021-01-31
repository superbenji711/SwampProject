import React from "react";
import HomePage from "./components/Home/HomePage";
import LoginPage from "./components/LogIn_SignUp/LoginPage";
import RecipePage from "./components/Recipes/RecipePage";
import SignupPage from "./components/LogIn_SignUp/Signup";
import {Route} from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Done from "./components/LogIn_SignUp/Done";

/*import logo from './logo.svg';
import './App.css'; */

const App = () => 
  <div className="ui container">
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/recipes" exact component={RecipePage} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/done" exact component={Done} />
  </div>;

export default App; 
