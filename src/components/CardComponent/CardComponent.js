import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './CardComponent.module.css';

/*
Component that is used as a wrapper for our cards. Will render everything placed
inside this component as children.
*/
class CardComponent extends Component {
  state = {
    visbility: false,
  }

  // Updates the key value of showComponent to the opposite boolean value
  showInfo = () => {
    this.setState(prevState => ({
      visbility: !prevState.visbility
    }))
  }

  // Lifecycle method that render our JSX code into the DOM
  render() {
    return (
      <Card className={styles.card}>
        <Card.Body>
          {this.props.children}
          {this.state.visbility ? (
            <p>You need to click on the button to login :)</p>
          ) : null}
          {this.props.info ? (
            <Button className={styles.toggleinfo} onClick={this.showInfo} variant="info">{this.state.visbility ? "Hide Info" : "Show Info"}</Button>
          ) : null}
        </Card.Body>
      </Card>
    );
  }
}

CardComponent.propTypes = {
  children: PropTypes.node.isRequired,
  info: PropTypes.string
}

export default CardComponent;
