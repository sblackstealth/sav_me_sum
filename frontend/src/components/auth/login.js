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
      user_type:'',
      user_level:'',
      is_veg:'',
      good_standing:'',
      user_events:null,
      user_donations: '',
      needs_training: false,
      training_count:'',
      isLoggedIn: false,
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

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModalLogin() {
    this.setState({modalIsOpen: false, message: ''});
  }

  handleFormInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLoginFormSubmit = e => {
    e.preventDefault();
    let setUser= this.props.setUser;

    const { username, password, us } = this.state;
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
    return(<div></div>)
  }
}

export default LogIn;
