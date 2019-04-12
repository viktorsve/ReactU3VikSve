import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CardComponent from '../../components/CardComponent/CardComponent';
import './LoginScreen.css';

// Screen component used for displaying the login screen
class LoginScreen extends Component {
  // Lifecycle method that render our JSX code into the DOM
  render() {
    return (
      <div className="wrapper">
        <CardComponent info="string">
          <Form className="bg-light">
            <Form.Group>
              <Form.Control type="text" placeholder="new user.."/>
            </Form.Group>
            <Button onClick={() => this.props.history.push("/dashboard")} variant="success">Login</Button>
          </Form>
        </CardComponent>
      </div>
    );
  }
}

LoginScreen.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default LoginScreen;
