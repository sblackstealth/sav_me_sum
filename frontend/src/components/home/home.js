import React, { Component } from 'react';
import axios from "axios";
import {Link, Router, Switch, Route} from 'react-router-dom';
import SetUser from '../../App';
import DistributionEvent from '../calendar/distributionEvents';
import RescueEvent from '../calendar/rescueEvents';
import NoUser from './nouser';
import app from'../../App';
import LogIn from '../auth/login';
import LogOut from '../auth/logout';
import RegisterUserMod from '../modals/registerUserMod';
import AboutUs from '../aboutUs';
import RescuerAffidavit from '../affidavits/rescuerAffidavit';
import FoodieVolunteerAffidavit from '../affidavits/foodieVolunteerAffidavit';


class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user: props.user
    }
  }
  
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
    let user = this.state.user;
    console.log(user)
  if(user=== null){
    return (
      <div>
        <button><Link to='/users/register'>register</Link></button><br/>
        <button><Link to='/users/login'>login</Link></button><br/>
        <AboutUs/>
        <RescuerAffidavit/>
        <FoodieVolunteerAffidavit/>
        <DistributionEvent /> 
        <RescueEvent/>   
        </div>)
  }else if (user.user_type=== "donor"||user.user_type==="rescuer") {
      return (
        <div className="DistributionEventCalendar">
          <button onClick={this.handleClickLogOut}>logout</button><br/>    
          <RescueEvent/>     
        </div>
      );
    } else if(user.user_type=== "volunteer"||user.user_type==="foodie"){
      return (
        <div className="RescueEventCalendar">
        <button onClick={this.handleClickLogOut}>logout</button><br/>
        <DistributionEvent />
        
        </div>
      )
    } 
  }
}

export default Home;
