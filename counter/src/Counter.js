/*
    implement counter
  master: https://github.com/Eddie-CooRo/
author: "MrR00200R"  >> https://github.com/MrR00200R/
*/

import React, { Component } from 'react';

export class Counter extends Component {
  state = {
    value: 0
  };
  static defaultProps = {
    max: Infinity,
    min: -Infinity
  };
  static getDerivedStateFromProps(nextProps, state) {
    if (state.value < nextProps.min) {
      return {
        value: nextProps.min
      };
    } else if (state.value > nextProps.max) {
      return { value: nextProps.max };
    } else {
      return null;
    }
  }
  handleIncrement = () => {
    this.setState(prevState => {
      return { value: Math.min(this.props.max, prevState.value + 1) };
    });
  };
  handleDecrement = () => {
    this.setState(prevState => {
      return { value: Math.max(this.props.min, prevState.value - 1) };
    });
  };

  render() {
    return (
      <div>
        <h3>Counter</h3>
        <p>{this.state.value}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;

/*
    implement counter
  master: https://github.com/Eddie-CooRo/
author: "MrR00200R"  >> https://github.com/MrR00200R/
*/
