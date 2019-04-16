/*
    implement todolist
  master: https://github.com/Eddie-CooRo/
author: "MrR00200R"  >> https://github.com/MrR00200R/
*/

import React, { Component } from 'react';
import TodoListItems from './TodoListItems';
import styles from './TodoList.module.css';
import classnames from 'classnames';

export class TodoList extends Component {
  id = 0;
  state = {
    todos: [],
    inputValue: '',
    filter: 'All'
  };
  setFilter = filterName => {
    this.setState({ filter: filterName });
  };
  getTodos = () => {
    switch (this.state.filter) {
      case 'All':
        return this.state.todos;
      case 'Dones':
        return this.state.todos.filter(t => t.done);
      case 'unDones':
        return this.state.todos.filter(t => !t.done);
      default:
        return this.state.todos;
    }
  };
  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };
  add = taskName => {
    this.setState(prevState => {
      return {
        todos: [
          ...prevState.todos,
          { name: taskName, done: false, id: this.id++ }
        ]
      };
    });
  };
  handleAddTodoPress = () => {
    if (this.state.inputValue) {
      this.add(this.state.inputValue);
      this.setState({ inputValue: '' });
    }
  };
  remove = index => {
    this.setState(prevState => {
      return {
        todos: [
          ...prevState.todos.slice(0, index),
          ...prevState.todos.slice(index + 1)
        ]
      };
    });
  };
  toggle = index => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map((todo, i) => {
          if (i === index) return { ...todo, done: !todo.done };
          else return todo;
        })
      };
    });
  };
  edit = (newName, index) => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map((todo, i) => {
          if (i === index) return { ...todo, name: newName };
          else return todo;
        })
      };
    });
  };

  render() {
    return (
      <div>
        <section>
          <b>Filter: </b>
          <button
            onClick={() => this.setFilter('All')}
            className={classnames({
              [styles.activeButton]: this.state.filter === 'All'
            })}>
            All
          </button>
          <button
            onClick={() => this.setFilter('unDones')}
            className={classnames({
              [styles.activeButton]: this.state.filter === 'unDones'
            })}>
            unDones
          </button>
          <button
            onClick={() => this.setFilter('Dones')}
            className={classnames({
              [styles.activeButton]: this.state.filter === 'Dones'
            })}>
            Dones
          </button>
        </section>
        <section>
          <button onClick={this.handleAddTodoPress}>AddTask</button>
          <input value={this.state.inputValue} onChange={this.handleChange} />
        </section>
        <section>
          <ul>
            {this.getTodos().map((todo, index) => (
              <TodoListItems
                {...todo}
                key={todo.id}
                onToggle={() => this.toggle(index)}
                onRemove={() => this.remove(index)}
                onEdit={newName => this.edit(newName, index)}
              />
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default TodoList;

/*
    implement todolist
  master: https://github.com/Eddie-CooRo/
author: "MrR00200R"  >> https://github.com/MrR00200R/
*/
