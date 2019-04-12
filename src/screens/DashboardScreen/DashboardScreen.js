import React, { Component } from 'react';
import DashboardComponent from '../../components/DashboardComponent/DashboardComponent';

// Screen component used for displaying our dashboard
class DashboardScreen extends Component {
  // Lifecycle method that render our JSX code into the DOM
  render() {
    return (
      <div className="wrapper">
        <DashboardComponent/>
      </div>
    )
  }
}

export default DashboardScreen;
