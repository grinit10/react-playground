import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    const firstvalue: string='Arnab';

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <span>The type of {firstvalue} is {typeof firstvalue}</span>
        </header>
      </div>
    );
  }
}

export default App;
