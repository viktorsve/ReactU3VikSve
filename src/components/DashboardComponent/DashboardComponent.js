import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import UserComponent from '../UserComponent/UserComponent';
import CardComponent from '../CardComponent/CardComponent';
import styles from './DashboardComponent.module.css';
import withHTTPRequests from '../../HOCS/withHTTPRequests';

/*
Our main container component used for handling our list of users that will be
passed to our UserComponent as props. Also handles the color state
which will toggle the color of our list items.
*/
class DashboardComponent extends Component {
  state = {
    value: "",
    color: true,
  }

  // Updates value state to the current value of the event object that is passed as an argument
  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  /*
  Prevents the default behavior of the element. Defines how our new user object
  will look like and sends that user as argument to our postUser method in the HOC.
  Also resets value in state.
  */
  addUser = event => {
    event.preventDefault()

    const newUser = {
      name: this.state.value,
      username: this.state.value,
      email: this.state.value,
      address: {
        street: 'mock street 12',
        suite: 'mock suite',
        city: 'mock city',
        zipcode: 'mock zip',
        geo: {
          lat: 0,
          lng: 0
        }
      }
    }

    this.props.postUser(newUser);

    this.setState({
      value: ""
    })
  }

  // Updates the key value of color to the opposite boolean value
  toggleColor = () => {
    this.setState(prevState => ({
      color: !prevState.color
    }))
  }

  // Runs when the component is mounted to the DOM
  componentDidMount() {
    this.props.fetchUsers();
  }

  // Lifecycle method that render our JSX code into the DOM
  render() {
    return (
      <Fragment>
        <CardComponent>
          <ListGroup as="ul">
            <UserComponent users={this.props.users} color={this.state.color}/>
          </ListGroup>
          <Button variant="info" onClick={this.toggleColor} className={styles.togglecolor} block>Toggle Colors</Button>
        </CardComponent>
        <CardComponent>
          <Form onSubmit={this.addUser}>
            <Form.Group>
              <Form.Control type="text" placeholder="name" value={this.state.value} onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group>
              <Button type="submit" value="Submit" variant="success" disabled={!this.state.value} block>Add</Button>
            </Form.Group>
            <Button variant="danger" onClick={this.removeUser} block>Remove</Button>
          </Form>
        </CardComponent>
      </Fragment>
    );
  }
}

DashboardComponent.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  postUser: PropTypes.func.isRequired,
  fetchUsers: PropTypes.func.isRequired
}

export default withHTTPRequests(DashboardComponent);
