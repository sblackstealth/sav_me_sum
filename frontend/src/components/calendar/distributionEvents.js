import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
BigCalendar.momentLocalizer(moment);
require('react-big-calendar/lib/css/react-big-calendar.css')

class Calendar extends Component {
  constructor(){
    super()
    this.state={
      eventlist:[]
    }
  }
  
  render() {
    let d = new Date()
    // expects year month daye hours minutes
    let eventList = [{/*this.state.events.map*/
      title: "Event", 
      startDate: new Date(d.getFullYear(),d.getMonth(), d.getDate(), d.getHours(), d.getMinutes()), 
      endDate: new Date(d.getFullYear(),d.getMonth(), d.getDate(), d.getHours(), d.getMinutes()+60) 
    }]

console.log(d, eventList)
    return (
        <div className="bigCalendar">
        <BigCalendar
        events={eventList}
        startAccessor='startDate'
        endAccessor='endDate'
        views={['month','week','day','agenda']}
        defaultView='month'
        />
        </div>
      );
    } 
}

export default Calendar;
