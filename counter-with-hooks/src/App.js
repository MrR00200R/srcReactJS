import React, { Component } from 'react';
import CounterWithHooks from './CounterWithHooks';

class App extends Component {
  render() {
    return (
      <>
        <CounterWithHooks min={0} />
      </>
    );
  }
}

export default App;
