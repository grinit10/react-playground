import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './containers/Home';

class App extends Component {

  state = {
        user: 'Arnab'
    }

  render() {
    return (
      <Home user={this.state.user}></Home>
    );
  }
}

export default App;
