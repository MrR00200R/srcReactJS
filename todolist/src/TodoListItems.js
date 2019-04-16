/*
    implement todolist
  master: https://github.com/Eddie-CooRo/
author: "MrR00200R"  >> https://github.com/MrR00200R/
*/

import React, { Component } from 'react';

class TodoListItems extends Component {
  state = {
    editing: false,
    inputValue: ''
  };

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };
  handleEditPressed = () => {
    this.setState({
      inputValue: this.props.name,
      editing: true
    });
  };

  handleSave = () => {
    if (this.state.inputValue) {
      this.props.onEdit(this.state.inputValue);
      this.setState({
        editing: false,
        inputValue: ''
      });
    }
  };

  handleCancel = () => {
    this.setState({
      editing: false,
      inputValue: ''
    });
  };

  render() {
    return (
      <>
        <li>
          {this.state.editing ? (
            <>
              <input
                value={this.state.inputValue}
                onChange={this.handleChange}
              />
              <button onClick={this.handleSave}>Save</button>
              <button onClick={this.handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              <button onClick={this.props.onRemove}>Delete</button>
              <button onClick={this.handleEditPressed}>Edit</button>
              <button onClick={this.props.onToggle}>
                {this.props.done ? 'un-Done' : 'Done'}
              </button>
              <span
                style={{
                  textDecoration: this.props.done ? 'line-through' : 'none'
                }}>
                {this.props.name}
              </span>
            </>
          )}
        </li>
      </>
    );
  }
}

export default TodoListItems;

/*
    implement todolist
  master: https://github.com/Eddie-CooRo/
author: "MrR00200R"  >> https://github.com/MrR00200R/
*/
