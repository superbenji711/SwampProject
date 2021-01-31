import React from "react";
import { Link } from "react-router-dom";
import {GiHearts} from "react-icons/gi";

const Done = () => (
  <div>
      <h1>
          Welcome to your Dashboard!
      </h1>
      <Link to="/" style={{display: 'flex', alignItems: 'center'}}> Home Page </Link>
      <h1>
        
      </h1>
      <Link to="/recipes" style={{display:'flex', alignItems:'center'}}> Recipe Page </Link>
      <h1>

      </h1>
      <h1>
        Your Favorites <GiHearts />
      </h1>
  </div>
  
)

export default Done;

/* Credits to: Owen Philips in https://www.simplecode.io/blog/build-admin-template-semantic-ui-react-part-2-login-signup/ */