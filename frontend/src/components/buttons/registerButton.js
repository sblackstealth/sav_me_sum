import React, { Component } from 'react';
import RegisterUser from '../auth/registeruser';
import RegisterUserMod from '../modals/registerUserMod';

class RegisterUserButton extends Component {
  render() {
    return (
      
        <button className="registerButton"onClick={this.RegisterUserMod}>register</button>
    
    );
  }
}

export default RegisterUserButton;