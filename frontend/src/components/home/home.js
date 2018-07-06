import React, { Component } from 'react';
import axios from "axios";
import {Link, Router, Switch, Route} from 'react-router-dom';
import AboutUs from '../aboutUs';
import Calendar from '../calendar/distributionEvents';



class Home extends React.Component {
  constructor(props){
    super(props)
  
    this.state={
      
    }
  }
  



  render() {
    let user = this.props.user;
    console.log(user)
    return (
      <div>
        HELLO FROM HOME
        <button><Link to='/users/register'>register</Link></button><br/>
        <button><Link to='/users/login'>login</Link></button><br/>
  
        <AboutUs/>
        <Calendar/>
        <Link to= 'home/affidavits/rescuerAffidavit'> Rescuer Affidavit</Link>
         <Link to='home/affidavits/foodieVolunteerAffidavit'>Foodie & Volunteer Affidavit </Link> 
        
        </div>)
  
  }
}

export default Home;
