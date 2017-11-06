import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TextFieldContainer from './components/TextField/TextFieldContainer';
import InputFieldContainer from './components/InputField/InputFieldContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <InputFieldContainer />

          <TextFieldContainer />
        </div>
      </div>
    );
  }
}

export default App;
