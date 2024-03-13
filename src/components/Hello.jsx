import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {

    render() {
        console.log(this.props);

        return (
            <p>Hello { this.props.name }!</p>
        )
  }
}

export default Hello;