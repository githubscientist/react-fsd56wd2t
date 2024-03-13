import React, { Component } from 'react'

export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    console.log('incrementing...');

    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

export default App