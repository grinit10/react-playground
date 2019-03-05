import React, { Component } from 'react';

import { UserMessage } from './interfaces/UserMessage';
import { Message } from './Message';
import logo from './logo.svg';
import './App.css';

const initstate: UserMessage = {
  name: 'Arnab',
  message: 'Hello World'
}

type State = typeof initstate;

class App extends Component {

  readonly state : State = initstate;

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <span>
            <Message name={this.state.name} message={this.state.message}></Message>
          </span>
        </header>
      </div>
    );
  }
}

export default App;
