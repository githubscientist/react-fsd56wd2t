import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {

    render() {
        console.log(this.props);

        // const { name } = this.props.name ? this.props : { name: 'Guest' };

        return (
            <p>Hello { this.props.name }!</p>
        )
  }
}

Hello.defaultProps = {
    name: 'Guest',
}

export default Hello;