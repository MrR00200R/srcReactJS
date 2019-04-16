/*
    implement mouse tracker
  master: https://github.com/Eddie-CooRo/
author: "MrR00200R"  >> https://github.com/MrR00200R/
*/

import React, { Component, createRef } from 'react';

class MouseTracker extends Component {
  state = {
    mouseX: 0,
    mouseY: 0,
    isMouseDown: false,
    dots: []
  };
  square = createRef();

  handleMouseDown = () => {
    this.setState({ isMouseDown: true });
  };
  handleMouseUp = () => {
    this.setState({ isMouseDown: false });
  };
  handleMouseLeave = () => {
    this.setState({ isMouseDown: false });
  };
  handleMouseEnter = event => {
    if (event.buttons) {
      this.setState({
        isMouseDown: true
      });
    }
  };
  handleMouseMove = event => {
    this.setState(
      {
        mouseX: event.pageX - this.square.current.offsetLeft,
        mouseY: event.pageY - this.square.current.offsetTop
      },
      () => {
        if (this.state.isMouseDown) {
          this.addDot(this.state.mouseX, this.state.mouseY);
        }
      }
    );
  };
  addDot = (x, y) => {
    this.setState(prevState => {
      return {
        dots: [...prevState.dots, { x, y }]
      };
    });
  };

  render() {
    return (
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <h3>Mouse Tracker</h3>
        <span>X: {this.state.mouseX}</span>
        <span>Y: {this.state.mouseY} </span>
        <span>MouseDown: {String(this.state.isMouseDown)}</span>
        <div
          ref={this.square}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onMouseLeave={this.handleMouseLeave}
          onMouseEnter={this.handleMouseEnter}
          onMouseMove={this.handleMouseMove}
          style={{
            border: '3px solid black',
            width: '400px',
            height: '400px',
            position: 'relative',
            overflow: 'hidden'
          }}>
          {this.state.dots.map(dot => (
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 64,
                backgroundColor: 'black',
                position: 'absolute',
                left: dot.x - 4,
                top: dot.y - 4
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MouseTracker;

/*
    implement mouse tracker
  master: https://github.com/Eddie-CooRo/
author: "MrR00200R"  >> https://github.com/MrR00200R/
*/
