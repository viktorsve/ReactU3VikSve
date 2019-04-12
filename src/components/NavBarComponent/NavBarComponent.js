import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import './NavBarComponent.css';

// Component used for handling the navigation bar and setting up routes for our app.
class NavBarComponent extends Component {
  // Lifecycle method that render our JSX code into the DOM
  render() {
    return (
        <Nav>
          <NavLink to="/login" className="navlink" style={{ textDecoration: "none" }}
          activeClassName="active">Login</NavLink>
          <NavLink to="/dashboard" className="navlink" style={{ textDecoration: "none" }}
          activeClassName="active">Dashboard</NavLink>
          <NavLink to="/user/" className="navlink" style={{ textDecoration: "none" }}
          activeClassName="active">User</NavLink>
        </Nav>
    );
  }
}

export default NavBarComponent;
