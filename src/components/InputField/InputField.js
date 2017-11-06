import React from 'react';

class InputField extends React.Component {
  render() {
    return <input type="text" onKeyUp={() => this.props.userNameInput('eeekk')} />;
  }
}

export default InputField;
