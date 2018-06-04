import React, { Component } from 'react';
import axios from "axios";
import SetUser from '../../App';
import DistributionEvent from '../calendar/distributionEvents';
import RescueEvent from '../calendar/rescueEvents';
import NoUser from './nouser';
import RegisterUserButton from '../buttons/registerButton';
import LoginUserButton from '../buttons/loginButton';
import LogoutUserButton from '../buttons/logoutButton';
import LogIn from '../auth/login';
import LogOut from '../auth/logout';
import RegisterUserMod from '../modals/registerUserMod';

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
          
          <div className="landButton">
            
            <LoginUserButton />
            <RegisterUserButton />
        
          </div>
          <NoUser/>
          {/* <RegisterUserButton/>
          <LoginUserButton/> */}
          <DistributionEvent />
          <LogoutUserButton/>
          <RescueEvent/>
           
        </div>)
 
}
  }
//}

export default Home;
