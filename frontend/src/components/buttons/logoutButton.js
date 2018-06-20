import React, { Component } from 'react';
import LogOut from '../auth/logout';

class LogoutUserButton extends Component {
  render() {
    return (
     
       <button className="logoutButton" onClick>logout</button>
     
    );
  }
}

export default LogoutUserButton;