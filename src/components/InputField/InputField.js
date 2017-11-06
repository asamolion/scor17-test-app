import React from 'react';
import { userNameInput } from '../../actions';
import './InputField.css';

class InputField extends React.Component {
  render() {
    return (
      <input
        className="inputField"
        type="text"
        ref="name"
        onKeyUp={() => {
          this.props.dispatch(userNameInput(this.refs.name.value));
        }}
      />
    );
  }
}

export default InputField;
