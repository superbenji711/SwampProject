import React from "react";
import { Link } from "react-router-dom";
import { Button} from "semantic-ui-react";

const Done = () => (
  <div>
      <h1>
          Thanks for signing up! Bon Appetite!
      </h1>
      <h1>

      </h1>
      <h1>
        
      </h1>
      <u1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        Click here to continue to your Dashboard.
      </u1>
     <Link to="/dashboard" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Button content="DASHBOARD" primary="true">
        </Button>
      </Link>

  </div>
)

export default Done;

/* Credits to: Owen Philips in https://www.simplecode.io/blog/build-admin-template-semantic-ui-react-part-2-login-signup/ */