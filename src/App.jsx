import React, { Component } from 'react'

export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pCount: 0,
      nCount: 0,
    };
  }

  pincrement = () => {
    this.setState({
      ...this.state,
      pCount: this.state.pCount + 1
    });
  }

  nincrement = () => {
    this.setState({
      ...this.state,
      nCount: this.state.nCount + 1
    });
  }

  render() {
    return (
      <div>
        <p>Positive Count: {this.state.pCount}</p>
        <button onClick={this.pincrement}>Pos +</button>

        <p>Negative Count: {this.state.nCount}</p>
        <button onClick={this.nincrement}>Neg +</button>
      </div>
    )
  }
}

export default App