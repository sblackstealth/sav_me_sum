import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/auth/login';
import Register from './components/auth/registeruser';
import Home from './components/home/home';
import axios from "axios";



class App extends Component {
  constructor(){
    super()
    this.state={
      user:null
    }
  }
  getUser=()=>{
    axios.get('/users/get_single_user')
    .then(res=>{
      this.setState({
        user: res.data

      })
    })
  }
  setUser=(user)=>{
      this.setState({
        user: user

      })
  }
  render() {
    let { user } = this.state;
    let setUser = this.setUser;
    return (
      <div className="App">
        <p>Hello from App.js component!</p>
        <Login setUser={setUser} /> 
        <Register />
        <Home  user={user}/>
      </div>
    );
  }
}

export default App;
