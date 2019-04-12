import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardComponent from '../../components/CardComponent/CardComponent';
import withHTTPRequests from '../../HOCS/withHTTPRequests';

// Screen component used for displaying our user screen
const UserScreen = props => {
  const [user, setUser] = useState({});
  const [visibility, setToggle] = useState(false);

  useEffect(() => {
    props.fetchUser(props.match.params.user).then(setUser)
  }, [])

  return (
    <div className="wrapper">
      <CardComponent>
        <Card.Img variant="top" src="http://placekitten.com/286/180" />
        <Card.Body>
          <Card.Title>{user.username}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{user.name}</Card.Subtitle>
          <Card.Text>{user.email}</Card.Text>
          {visibility ? (
            <Card.Text>{user.address.city}<br/>{user.address.street}<br/>{user.address.suite}</Card.Text>
          ) : null}
          <Button onClick={() => setToggle(!visibility)} variant="primary">{visibility ? "Hide Address" : "Show Address"}</Button>
        </Card.Body>
      </CardComponent>
    </div>
  )
}

CardComponent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      user: PropTypes.string.isRequired
    })
  }),
  fetchUser: PropTypes.func
}

export default withHTTPRequests(UserScreen);
