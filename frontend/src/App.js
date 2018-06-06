import React, { Component } from 'react';
import {Link, Router, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/auth/login';
import Register from './components/auth/registeruser';
import Home from './components/home/home';
import axios from "axios";
import LogIn from './components/auth/login';
import DistributionEvent from './components/calendar/distributionEvents';



class App extends Component {
  constructor(props){
    super(props)
    this.state={
      user:{}
    }
  }

componentWillMount() {
  axios
   .get("/getSingleUser")
   .then(res => {
     this.setState({
       user: res.data.user
     })
   })
   .catch( (err) => {
     this.setState({
       loggedInForRegister: err.response.status
     })
   })
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
    return (
      <div className="App">
      
      <Route exact path={'/users/login'} component={LogIn} />
      <Route exact path={'/users/register'} component={Register} />
      <Route  path={'/users/:userId'} component={Home} />
      <Route exact path={'/users/loginUser'} component={DistributionEvent} />
      
      
      
      <Home user={user}/>
     </div>
     
    );
  }
}

export default App;
