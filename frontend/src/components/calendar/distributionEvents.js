import React, { Component } from 'react';

class DistributionEvent extends Component {
  render() {
      return (
        <div className="DistributionEventCalendar">
        
          <iframe src="https://calendar.google.com/calendar/embed?src=j3rjq38fs5jti62ir66ueq08dg%40group.calendar.google.com&ctz=America%2FNew_York" style={{border: "0", width:"800", height:"600" }}frameborder="0" scrolling="no"></iframe>
        </div>
      );
    } 
}

export default DistributionEvent;