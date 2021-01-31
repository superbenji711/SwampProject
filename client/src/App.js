import './App.css';
import NavBar from './navigations/NavBar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, {Container} from 'react';
import Home from './views/Home';
import Profile from './views/Profile';
import { Header, Image } from 'semantic-ui-react';

const App = () => {
  return (

    <div className="Apps">
      <div className="App">
        <NavBar/>
      </div>

      <div className="body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Profile" component={Profile} />
          {/* <Route component={null} /> */}
        </Switch>
      </div>


    </div>
  );
}


export default App; 
