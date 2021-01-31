import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Message } from "semantic-ui-react";
import Layout from "./Layout";

class SignupPage extends Component {
    render() {
        return (
          <Layout header="Create your account">
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              className="auth-input-field"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              className="auth-input-field"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Re-enter password"
              type="password"
              className="auth-input-field"
            />
    
            <Link to="/done">
              <Button color="teal" fluid size="huge">
                Create your account
              </Button>
            </Link>
    
            <Message size="big">
                <Link to="/login">
                  Already have an account? Login Here
                </Link>
            </Message>
          </Layout>
        );
      }
}
export default SignupPage

/* Credits to: Owen Philips in https://www.simplecode.io/blog/build-admin-template-semantic-ui-react-part-2-login-signup/ */