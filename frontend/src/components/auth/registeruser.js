import React, { Component } from 'react';

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
  }
    componentWillMount() {
      axios
       .get("/isloggedIn")
       .then(res => {
         this.setState({
           loggedInForRegister: res.data
         })
       })
       .catch( (err) => {
         this.setState({
           loggedInForRegister: err.response.status
         })
       })
    }
  
    handleFormInput = e => {
      const {username, email,confirmpassword, password,userType,isVeg,message } = this.state
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  
    handleRegisterFormSubmit = e => {
      e.preventDefault();
  
      const { username, password, email, userType, userLevel, isVeg, goodStanding,userEvents, userDonations,needsTraining, trainingCount } = this.state;
      axios
        .post("/users/register", {
            username: user_name,
            password: password,
            email: email,
            userType:user_type,
            userLevel:user_level,
            isVeg:is_veg,
            goodStanding:good_standing,
            userEvents:user_events,
            userDonations:user_donations,
            needsTraining:needs_training,
            trainingCount:training_count,
            
        })
        .then(() => {
          axios
            .post('/users/login',{
              username: username,
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
  
  render() {
    const { confirmPassword, password, userame, email, isLoggedIn, userType, isVeg } = this.state

    if(isLoggedIn) {
      return <Redirect to='/users/home/:userid' />
    }
    return (
      <div className="registerUser">
        <form onSubmit={this.handleLoginFormSubmit}>
          <input className="input formInput" type="text" placeholder="username" onChange={this.handleFormInput} name='username' required></input> <br />
          <input className="input formInput" type="text" placeholder="isVeg" onChange={this.handleFormInput} name='isveg' required>im at most vegetarian(true/false)</input> <br />
          <input className="input formInput" type="email" placeholder="email" onChange={this.handleFormInput} name='email' required></input> <br />
          <input className="input formInput" type="password" placeholder="password" onChange={this.handleFormInput} name='password' required></input> <br />
          <input className="input formInput" type="password" placeholder="confirmPassword" onChange={this.handleFormInput} name='confirmpassword' required></input> <br />
          <input className="input formInput" type="radio" name="userType" onChange={this.handleFormInput} placeholder='donor' required></input> <br />
          <input className="input formInput" type="radio" name="userType" onChange={this.handleFormInput} placeholder='rescuer' required></input> <br />
          <input className="input formInput" type="radio" name="userType" onChange={this.handleFormInput} placeholder='volunteer' required></input> <br />
          <input className="input formInput" type="radio" name="userType" onChange={this.handleFormInput} placeholder='foodie' required></input> <br />
          
          <button className="formButton">register</button>
        </form>
        <p> {this.state.message} </p>
        <p> {this.state.password !== this.state.confirmpassword && this.state.confirmpassword
              ? 'passwords do not match' : '' } </p>
        <p> {password && password.length < 8 ? 'password must be 8 characters' : ''} </p>
      </div>
    );
  }
}


export default RegisterUser;
