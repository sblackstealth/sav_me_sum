import React, { Component } from 'react';
import axios from "axios";



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
       
      </div>
  }
}

export default DonorHome;











  
