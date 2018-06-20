import React, { Component } from 'react';
import {Link, Router, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Register from './components/auth/registeruser';
import Home from './components/home/home';
import axios from "axios";
import LogIn from './components/auth/login';
import DistributionEvent from './components/calendar/distributionEvents';
import AboutUs from './components/aboutUs';
import RescuerAffidavit from './components/affidavits/rescuerAffidavit';
import FoodieVolunteerAffidavit from './components/affidavits/foodieVolunteerAffidavit';
import DonorHome from './components/home/donorHome';
import FoodieHome from './components/home/foodieHome'



class App extends Component {
  constructor(props){
    super(props)
    this.state={
        user:{
        isNull: true,
        user_id:"",
        user_name:"",
        user_type: "",
        user_level:"",
        training_count:""

      }
    }
  }


  getUser=()=>{
    axios.get('/users/get_single_user')
    .then(res=>{
      this.setState({
        user: res.data

      })
    })
  }
  setUser=(user)=>{
      this.setState({
        user: user

      })
  }




  render() {
    let { user } = this.state;
    let setUser = this.setUser;
    console.log(user)

    return (
  <div className="App">
    <div className= "left-image-sidebar">
        <img className="single-image" src="https://i.imgur.com/E2B5uqn.jpg" />
        <img className="single-image" src="https://i.imgur.com/xyMqAU8.jpg" />
        <img className="single-image" src="https://i.imgur.com/KnEhw9j.jpg" />
        <img className="single-image" src="https://i.imgur.com/cOHnGCK.jpg" />
       </div>
       <div className="center-content">
       <div >whaddup</div>
       
       
        <AboutUs/>
        <Link to='/home/affidavits/rescuerAffidavit/'> RESCUER AFFIDAVIT</Link><br/>
        <Link to='/home/affidavits/foodieVolunteerAffidavit'> FOODIE & VOLUNTEER AFFIDAVIT </Link>
        
       
       <Switch>
      <Route exact path='/users/login' component={LogIn} />
      <Route exact path='/users/register' component={Register} />
      <Route exact path='/' component={Home}user={user} />
      <Route exact path='/users/foodie/:userId' component={FoodieHome} />
      <Route exact path='/users/donor/:userId' component={DonorHome} />
      <Route exact path='/users/loginUser' component={DistributionEvent} />
      <Route exact path='/home/affidavits/rescuerAffidavit/' component={RescuerAffidavit}/>
      <Route exact path='/home/affidavits/foodieVolunteerAffidavit/' component={FoodieVolunteerAffidavit}/>
      </Switch>
      </div>
       <div className= "right-image-sidebar">
        <img className="single-image" src="https://i.imgur.com/xAIDswH.jpg" />
        <img className="single-image" src="https://i.imgur.com/BNuixvf.jpg" />
        <img className="single-image" src="https://i.imgur.com/XRxE1C5.jpg" />
        <img className="single-image" src="https://i.imgur.com/B3eKZAC.jpg" />
       </div>
       
     </div>
     
    );
  }
}

export default App;
