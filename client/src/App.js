import './App.css';
import NavBar from './navigations/NavBar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import Home from './views/Home';
import Profile from './views/Profile';
import { Header } from 'semantic-ui-react';

const App = ()=> {
  return (

    <div className="App">

        <Header>Nav Bar
          {/* <NavBar /> */}
        </Header>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Profile" component={Profile} />
          {/* <Route component={null} /> */}
        </Switch>

 
    </div>
  );
}


export default App; 
