import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/auth/login';
import Register from './components/auth/registeruser';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hello from App.js component!</p>
        <Login /> 
        <Register />
      </div>
    );
  }
}

export default App;
