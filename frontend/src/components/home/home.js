import React, { Component } from 'react';
import axios from "axios"
import DistributionEvent from '../calendar/distributionEvents';
import RescueEvent from '../calendar/rescueEvents';

class Home extends React.Component {

  render() {
    let user = this.props.user;
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
          {/* <RescuerAffidavit/>
          <FoodieHelpingHandAffidavit/> */}
        </div>)
  //   }
  // }
}
}

export default Home;
