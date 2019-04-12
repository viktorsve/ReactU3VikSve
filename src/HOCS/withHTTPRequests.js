import React, { Component } from 'react';

const withHTTPRequests = WrappedComponent => {
  return class extends Component {
    state = {
      users: []
    }

    fetchUsers = () => {
      fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(data => {
          this.setState({
            users: data
          });
        })
    }

    fetchUser = (param) => {
      return fetch("http://localhost:3000/users/" + param)
      .then(res => res.json())
      .then(data => {
         return data
      });
    }

    postUser = (user) => {
      fetch('http://localhost:3000/users', {
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
