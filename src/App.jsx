import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props); // Required to call the parent constructor

    // Set the initial state
    this.state = {
      count: 0,
    }
  }

  increment = () => {
    // Update the state using the setState method
    // this.state.count = this.state.count + 1; // This will not work
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {

    console.log(this.state);

    return (
      <div>
        <p>Count: { this.state.count }</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

export default App;