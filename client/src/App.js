import React from "react";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RecipePage from "./components/pages/RecipePage";
import {Route} from "react-router-dom";
/*import logo from './logo.svg';
import './App.css'; */


const App = () => 
  <div className="ui container">
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/recipes" exact component={RecipePage} />
  </div>;
  
export default App; 
