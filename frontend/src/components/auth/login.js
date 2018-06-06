import React, { Component } from 'react';
import axios from "axios";
import setUser from "../../App"
import LoginUserButton from '../buttons/loginButton';



class LogIn extends Component {
  constructor() {
    super();

    this.state = {
      user_name: '',
      password: '',
      email:'',
      message: '',
      modalIsOpen: false,
      loggedIn: false,
      toggle: false,
    }
    // this.openModal = this.openModal.bind(this);
    // this.closeModalLogin = this.closeModalLogin.bind(this);
  }
 componentWillMount() {
   axios
    .get('/users/loginUser')
    .then(res => {
      this.setState({
        loggedIn: res.data
      })
    })
    .catch( (err) => {
      this.setState({
        loggedIn: err.response.status
      })
    })
 }

  // openModal() {
  //   this.setState({modalIsOpen: true});
  // }

  // closeModalLogin() {
  //   this.setState({modalIsOpen: false, message: ''});
  // }

  handleFormInput= e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLoginFormSubmit = e => {
    
    e.preventDefault();
    let setUser= this.props.setUser;

    const { user_name, password, user, loggedIn, message } = this.state;
    axios
      .post("/users/login", {
        user_name: user_name,
        password: password,
        
      })
      .then(res => {this.setState({
        message: "success",
        loggedIn: true,
        user: user
       
      });
      console.log (user)
      })
      .catch(err => {
        this.setState({
          user_name: "",
          password: "",
          message: `${err.response.data}`
        });
      })
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
    return(
    <React.Fragment>
      <form className="loginForm" onSubmit={this.handleLoginFormSubmit}>
      <input className="loginInput" type="text" placeholder="username" onChange={this.handleFormInput} name="user_name" value={this.state.user_name}></input> 
      <input className="loginInput" type="password" placeholder="password" onChange={this.handleFormInput} name="password" value={this.state.password}></input> 
      <input type="submit" value="Submit"/>
      </form>
      
    </React.Fragment>)
  }
}
export default LogIn;
