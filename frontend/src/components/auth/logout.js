import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import axios from "axios";

class LogOut extends Component {

 
    handleClickLogOut = () => {
      axios
        .get("/users/logout")
        .then( (res) => {
          this.setState({
            loggedIn: false
          })
        })
        .catch( (err) => {
          console.log(err);
        })
    }
  

  render() {
    if (!this.state.loggedIn) {
      return <Redirect to="/"/>
    }
    return <div><button className="logoutButton"  onClick={this.handleClickLogOut()}>logout</button></div>
  }
}


export default LogOut;

