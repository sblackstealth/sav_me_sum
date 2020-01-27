import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AboutUs extends Component {
  render() {
    return (
      <div className="aboutUs">
        <Link to='./aboutUS'>About</Link>
      </div>
    );
  }
}

export default AboutUs;
