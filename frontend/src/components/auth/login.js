import React, { Component } from 'react';
import axios from "axios";
import setUser from "../../App"


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
    this.openModal = this.openModal.bind(this);
    this.closeModalLogin = this.closeModalLogin.bind(this);
  }
 componentWillMount() {
   axios
    .get('/users')
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

  handleFormInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLoginFormSubmit = e => {
    e.preventDefault();
    let setUser= this.props.setUser;

    const { username, password, user } = this.state;
    axios
      .post("/users/login", {
        username: username,
        password: password
      })
      .then(res => {
        let user = res.data
        setUser(user);
      })
      .catch(err => {
        this.setState({
          username: "",
          password: "",
          message: `${err.response.data}`
        });
      });
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
    return(<div>
      <form className="loginForm" onSubmit={this.handleLoginFormSubmit}>
      <input classname="loginInput" type="text" placeholder="Username" onChange={this.handleFormInput} name="username" value={this.state.user_name}></input> 
      <input classname="loginInput" type="password" placeholder="Password" onChange={this.handleFormInput} name="password" value={this.state.user_name}></input> 
      </form>
    </div>)
  }
}

export default LogIn;
