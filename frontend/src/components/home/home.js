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
import RegisterUser from '../auth/registeruser';
import AboutUs from '../aboutUs';
import RescuerAffidavit from '../affidavits/rescuerAffidavit';
import FoodieVolunteerAffidavit from '../affidavits/foodieVolunteerAffidavit';


class Home extends React.Component {
  constructor(props){
    super(props)
  
    this.state={
      
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
    let user = this.props.user;
    console.log(user)
    debugger
    return (
      <div>
        HELLO FROM HOME
        <button><Link to='/users/register'>register</Link></button><br/>
        <button><Link to='/users/login'>login</Link></button><br/>
  
        <AboutUs/>
        <RescuerAffidavit/>
        <FoodieVolunteerAffidavit/>
        
        </div>)
  
  }
}

export default Home;
