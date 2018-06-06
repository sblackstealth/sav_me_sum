import React, { Component } from 'react';
import {handleClickLogOut} from '../auth/login';

class LogoutUserButton extends Component {
  render() {
    return (
      
       <button className="logoutButton" onClick={this.handleClickLogOut}>login</button>
      
    );
  }
}

export default LogoutUserButton;