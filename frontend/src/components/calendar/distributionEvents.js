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
      title: "Food Rescue Event", 
      startDate: new Date(d.getFullYear(),d.getMonth(), d.getDate()+1, d.getHours(), d.getMinutes()+200), 
      endDate: new Date(d.getFullYear(),d.getMonth(), d.getDate()+1, d.getHours(), d.getMinutes()+245) 
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
