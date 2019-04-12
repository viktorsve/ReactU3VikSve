import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import DashboardScreen from './screens/DashboardScreen/DashboardScreen';
import UserScreen from './screens/UserScreen/UserScreen';

class App extends Component {
  render() {
    return (
        <Router>
          <NavBarComponent/>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/login"/>} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/dashboard" component={DashboardScreen} />
            <Route path="/user/:user" component={UserScreen} />
            <Redirect from="/user" to="/login"/>
          </Switch>
        </Router>
    );
  }
}

export default App;
