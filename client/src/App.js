import React from "react";
import Home from "./views/Home";
import LoginPage from "./views/LoginPage";
import RecipePage from "./views/RecipePage";
import NavBar from './navigations/NavBar';
import SignupPage from "./components/LogIn_SignUp/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import Done from "./components/LogIn_SignUp/Done";
import Profile from './views/Profile';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => {
  return (
    <div className="Apps">
      <div className="App">
        <NavBar/>
      </div>

      <div className="body">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/recipes" exact component={RecipePage} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/done" exact component={Done} />
          <Route exact path="/Profile" component={Profile} />
          </Switch>
      </div>


    </div>
  );
}


export default App; 
