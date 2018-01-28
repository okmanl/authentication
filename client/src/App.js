import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="http://localhost:5000/auth/google">Sign in with Google</a>
        <div></div>
        <a href="http://localhost:5000/api/user"> check to see program remembers authentication</a>
      </div>
    );
  }
}

export default App;
