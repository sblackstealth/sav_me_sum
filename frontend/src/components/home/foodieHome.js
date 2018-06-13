import React, { Component } from 'react';
import axios from "axios";
import LogoutUserButton from '../buttons/loginButton';
import DistributionEvent from '../calendar/distributionEvents';

class FoodieHome extends Component {
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
    return (
      <div className="foodieHome">
         <LogoutUserButton/>
       <DistributionEvent/>   
      </div>
    );
  }
}

export default FoodieHome;
