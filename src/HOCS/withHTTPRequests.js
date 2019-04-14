import React, { Component } from 'react';


// Higher order component used for making API calls to our backend
const withHTTPRequests = WrappedComponent => {
  return class extends Component {
    state = {
      users: []
    }

    /*
    Method that fetches our list of users and returns a promise. To use the data
    we run the response method json() that will parse the body text of our response
    object as JSON and then return a JS object. Our users state will then be set
    to the data we get back.
    */
    fetchUsers = () => {
      fetch("http://api.softhouse.rocks/users")
        .then(res => res.json())
        .then(data => {
          this.setState({
            users: data
          });
        })
    }

    /*
    Appends the parameter to the url string that we fetch from and then returns the
    data as an object that we can use.
    */
    fetchUser = (param) => {
      return fetch("http://api.softhouse.rocks/users/" + param)
        .then(res => res.json())
        .then(data => {
          return data
        });
    }

    /*
    Takes our user as a parameter and then makes a POST request to our backend
    with our parameter as the body data. The data type of the body has to match
    the content-type in our header, therefore we turn our user object into a JSON
    string.
    */
    postUser = (user) => {
      fetch('http://api.softhouse.rocks/users', {
          method: 'POST',
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
        .then(res => res.json())
        .then(data => {
          this.setState(prevState => ({
            users: [...prevState.users, data]
          }))
        })
    }

    // Lifecycle method that render our JSX code into the DOM
    render() {
      return (
        <WrappedComponent
          users={this.state.users}
          fetchUsers={this.fetchUsers}
          fetchUser={this.fetchUser}
          postUser={this.postUser}
          {...this.props}
        />
      )
    }
  }
}

export default withHTTPRequests;
