/*
    implement timer
  master: https://github.com/Eddie-CooRo/
author: "MrR00200R"  >> https://github.com/MrR00200R/
*/

import React, { Component } from 'react';

export class Timer extends Component {
  state = {
    value: 0,
    started: false
  };
  interval = null;

  handleStart = () => {
    if (!this.interval) {
      this.setState({
        started: true
      });
      this.interval = setInterval(() => {
        this.setState(prevState => {
          return { value: prevState.value + 1 };
        });
      }, 1000);
    }
  };
  handlePause = () => {
    if (this.interval) {
      this.setState({
        started: false
      });
      clearInterval(this.interval);
      this.interval = null;
    }
  };
  handleReset = () => {
    this.handlePause();
    this.setState({
      value: 0
    });
  };
  handletoggle = () => {
    if (this.state.started) {
      this.handlePause();
    } else {
      this.handleStart();
    }
  };

  render() {
    return (
      <>
        <h2>Timer</h2>
        <p>{this.state.value}</p>
        <button onClick={this.handletoggle}>
          {this.state.started ? 'Pause' : 'Start'}
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </>
    );
  }
}

export default Timer;

/*
    implement timer
  master: https://github.com/Eddie-CooRo/
author: "MrR00200R"  >> https://github.com/MrR00200R/
*/
