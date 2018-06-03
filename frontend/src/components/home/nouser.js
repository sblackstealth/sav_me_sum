import React, { Component } from 'react';
import RescuerAffidavit from'../affidavits/rescuerAffidavit';
import FoodieHelpingHandAffidavit from '../affidavits/foodieVolunteerAffidavit';
import AboutUs from '../aboutUs';

class NoUser extends Component {
  render() {
    return (
      <div className="noUser">
        <AboutUs/>
        <RescuerAffidavit/>
        <FoodieHelpingHandAffidavit/>
      </div>
    );
  }
}

export default NoUser;

