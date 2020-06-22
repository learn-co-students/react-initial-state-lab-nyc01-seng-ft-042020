import React, { Component } from 'react';

class Bomb extends Component {
  constructor(props) {
    super();
    this.state = { secondsLeft: props.initialCount };
  }

  render() {
    const { secondsLeft } = this.state;
    if (secondsLeft !== 0) {
      return <h1>{secondsLeft} seconds left before I go boom!</h1>;
    }
    return <h1>Boom!</h1>;
  }
}
export default Bomb;
