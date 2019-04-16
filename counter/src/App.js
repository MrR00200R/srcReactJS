import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <>
        <Counter min={0} />
      </>
    );
  }
}

export default App;
