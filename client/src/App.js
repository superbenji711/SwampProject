import './App.css';
import NavBar from './navigations/NavBar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './views/Home';
import Profile from './views/Profile';

function App() {
  return (

    <div className="App">

      <Router>
        <NavBar />

        <Switch>
          {/* <Route exact path="/" component={Home} />
          <Route exact path="/Profile" component={Profile} /> */}
          {/* <Route component={null} /> */}
        </Switch>

      </Router>
    </div>
  );
}


export default App; 
