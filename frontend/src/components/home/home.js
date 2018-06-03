import React, { Component } from 'react';
import axios from "axios";
import SetUser from '../../App';
import DistributionEvent from '../calendar/distributionEvents';
import RescueEvent from '../calendar/rescueEvents';
import NoUser from './nouser';
import RegisterUserButton from '../buttons/registerButton';
import LoginUserButton from '../buttons/loginButton';
import LogoutUserButton from '../buttons/logoutButton';

class Home extends React.Component {

  render() {
    // let user = this.props.user;
    // let userType = user.user_type;
    // if (userType=== "donor"||userType==="rescuer") {
    //   return (
    //     <div className="DistributionEventCalendar">
    //       <DistributionEvent />         
    //     </div>
    //   );
    // } else if(userType=== "volunteer"||userType==="foodie"){
    //   return (
    //     <div className="RescueEventCalendar">
    //     <RescueEvent/>
        
    //     </div>
    //   )
    // } else {
        return (<div>No user

          <NoUser/>
          <RegisterUserButton/>
          <LoginUserButton/>
          <LogoutUserButton/>
          <DistributionEvent /> 
          <RescueEvent/>
           
        </div>)
 
}
  }
//}

export default Home;
