import React, { Component } from 'react';

import Message from './Message';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <span>
            <Message></Message>
          </span>
        </header>
      </div>
    );
  }
}

export default App;
