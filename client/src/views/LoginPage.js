import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Message } from "semantic-ui-react";
import Layout from "../components/LogIn_SignUp/Layout";

const LoginPage = () => (
        <Layout header ="Dashboard Log In">
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
            <Link to= "/dashboard">
                <Button color="blue" fluid size="huge">
                    LOGIN
                </Button>
            </Link>
            <Message size="big">
                <Link to="/signup">
                    Don't have an account? Sign up here
                </Link>
            </Message>
        </Layout>
)

export default LoginPage;

/* Credits to: Owen Philips in https://www.simplecode.io/blog/build-admin-template-semantic-ui-react-part-2-login-signup/ */