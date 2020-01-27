import React, { Component } from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom";


class RegisterUser extends Component {
  constructor() {
    super();

    this.state = {
      user_name: '',
      password: '',
      confirmpassword:'',
      email:'',
      user_type:'',
      user_level:'',
      is_veg:'',
      good_standing:'',
      user_events:null,
      user_donations: '',
      needs_training: false,
      training_count:'',
      message: '',
      isLoggedIn:false,
      loggedInForRegister: false,
     
    }
 
  
    let handleFormInput = e => {
      const {user_name, email,confirmpassword, password,user_type,is_veg,message } = this.state
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  
   let handleRegisterFormSubmit = e => {
      e.preventDefault();
  
      const { user_name, password, email, user_type, user_level, is_veg, good_standing,user_events, user_donations,needs_training, training_count } = this.state;
      axios
        .post("/users/register", {
            user_name: user_name,
            password: password,
            email: email,
            user_type:user_type,
            user_level:user_level,
            is_veg:is_veg,
            good_standing:good_standing,
            user_events:user_events,
            user_donations:user_donations,
            needs_training:needs_training,
            training_count:training_count,
            
        })
        .then(() => {
          axios
            .post('/users/login',{
              user_name: user_name,
              password: password
            })
            .catch(error => {
              console.log('login fail after register')
            })
        })
        .then(res => {
          this.setState({
            message: 'success',
            isLoggedIn: true,
          });
        })
        .catch(err => {
          this.setState({
            message: `Error registering. ${err.response.data.detail}`,
          });
        });
    }
  }
  
  render() {
    const { confirmpassword, password, user_name, email, isLoggedIn, user_type, is_veg } = this.state

    if(isLoggedIn) {
      return <Redirect to='/users/home/:userid' />
    }
    return (
      <React.Fragment className="registerUser">
        <form onSubmit={this.handleRegisterFormSubmit} onChange={this.handleFormInput}>
          <input className="inputFormInput" type="text" placeholder="username" name='username' required></input> <br />
          <input className="inputFormInput" type="text" placeholder="is vegetarian(true/false)" name='isveg' required></input> <br />
          <input className="inputFormInput" type="email" placeholder="email" name='email' required></input> <br />
          <input className="inputFormInput" type="password" placeholder="password" name='password' required></input> <br />
          <input className="inputFormInput" type="password" placeholder="confirmPassword" name='confirmpassword' required></input> <br />
          <p>User Type</p><br/>
          <p>donor</p><input className="inputFormInput" type="radio" name="userType" placeholder='donor' required></input> <br />
          <p>rescuer</p><input className="inputFormInput" type="radio" name="userType" placeholder='rescuer' required></input> <br />
          <p>volunteer</p><input className="inputFormInput" type="radio" name="userType" placeholder='volunteer' required></input> <br />
          <p>foodie</p><input className="inputFormInput" type="radio" name="userType" placeholder='foodie' required></input> <br />
          <input className="registerSubmitButton" type="submit"></input>
          
        
        <p> {this.state.message} </p>
        <p> {this.state.password !== this.state.confirmpassword && this.state.confirmpassword
              ? 'passwords do not match' : '' } </p>
        <p> {password && password.length < 8 ? 'password must be 8 characters' : ''} </p>
        </form>
      </React.Fragment>
    );
  }
}


export default RegisterUser;
