import React, { Component } from 'react';
import RescueEvent from '../calendar/rescueEvents';
import axios from "axios";
import LogOut from '../auth/logout';
import app from'../../App';
import SetUser from '../../App';



class DonorHome extends Component {
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
   return 
      <div className= "donorHome">
        <LogOut/>
       <RescueEvent/> 
      </div>
  }
}

export default DonorHome;











  
