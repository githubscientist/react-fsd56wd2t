import React, { Component } from 'react';
import Hello from './components/Hello';

class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Hello />
      </div>
    )
  }
}

export default App;