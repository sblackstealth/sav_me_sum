import React, { Component } from 'react';
import axios from 'axios';
import quickstart from '../../../src/quickstart'

class AddEvent extends Component {
    constructor(){
        super()
        this.state={
            eventDate:null,
            eventTime:null,
            eventBorough:null,
            eventLoc:null,
            eventZip:null,
            eventName:null,
            email:null,
            isVeg:false,
            donations:null,
            numberOfPortions: null

        }
    }
        handleInputChange = e =>  {
            const{eventDate,eventTime,eventBorough,eventLoc,eventZip,eventName,email,isVeg,donations,numberOfPortions}= this.state
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        handleAddEventFormSubmit = e => {
            e.preventDefault();
            const{eventDate,eventTime,eventBorough,eventLoc,eventZip,eventName,email,isVeg,donations,numberOfPortions}= this.state
            this.state;
            // google
            //   .post("/addEvent", {
                  
                
            //   })
            //   .then(() => {)}
                axios
                  .post('/users/addEvent',{
                    eventDate:eventDate,
                    eventTime:eventTime,
                    eventBorough:eventBorough,
                    eventLoc:eventLoc,
                    eventZip:eventZip,
                    eventName:eventName,
                    email:email,
                    isVeg:isVeg,
                    donations:donations,
                    numberOfPortions: numberOfPortions
        
                   
                
                  })
                  .catch(error => {
                    console.log('login fail after register')
                  })
              
              .then(res => {
                this.setState({
                  message: 'success',
                  isLoggedIn: true,
                });
              })
              .catch(err => {
                this.setState({
                  message: `Error registering. ${err.response.data.detail}`,
                });
              });
           }
        
        
  render(){
    return (
      <div className="addEvent">
       <form className='addEventForm'onChange={this.handleInputChange} onsubmit={this.handleAddEventFormSubmit}>
       
    <input type='text' className='dateInput' placeholder='event Date'value='eventDate'> </input>
    <input type='text' className='timeInput' placeholder='event Time'value='eventTime'> </input>
    <input type='text' className='boroughInput' placeholder='event Borough'value='eventBorough'> </input>
    <input type='text' className='locationInput' placeholder='event Location'value='eventLoc'> </input>
    <input type='text' className='zipInput' placeholder='event Zipcode'value='eventZip'> </input>
    <input type='text' className='eventName' placeholder='event Name'value='eventName'> </input>
    <input type='text' className='EventholderEmail' placeholder='email'value='email'> </input>
    <input type='text' className='veggie' placeholder='is at most vegeterain(yes/no)'value='isVeg'> </input>
    <input type='text' className='DonationList' placeholder='donations seperated by commas'value='dontations'> </input>
    <input type='text' className='portions' placeholder='number of portions (1 portion = 30 meals)'value='numberOfPortions'> </input>
    
        </form>
      </div>
    );
  }

}

export default AddEvent;