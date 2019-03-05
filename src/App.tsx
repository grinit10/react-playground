import React, { Component } from 'react';

import {Message} from './Message';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentWillMount = ()  => {
    console.log('Almost there');
  }

  componentDidMount = ()  => {
    console.log('Finally mounted')
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <span>
            <Message msg='This is a message!!!'></Message>
          </span>
        </header>
      </div>
    );
  }
}

export default App;
