import React from 'react';
import './TextField.css';

class TextField extends React.Component {
  render() {
    return <p className="name">{this.props.name}</p>;
  }
}

export default TextField;
