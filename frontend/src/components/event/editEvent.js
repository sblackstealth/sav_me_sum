import React, { Component } from 'react';

// class EditEvent extends Component {
//   constructor(props){
//     super(props)
//     this.state={
//       username: this.state.props.username,
//       email: this.state.props.email,
//       first_name: this.state.props.firstname,
//       last_name: this.state.props.lastname,
//       eventDate: this.state.props.eventDate,
//       eventTime: this.state.props.eventTime,
//       eventBorough: this.state.props.eventBorough,
//       eventLoc: this.state.props.eventLoc,
//       eventZip: this.state.props.eventZip,
//       eventName: this.state.props.eventName

//     }
//   }
//     handleInputChange = e =>  {
//         const{eventDate,eventTime,eventBorough,eventLoc,eventZip,eventName,email,isVeg,donations,numberOfPortions}= this.state
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }
//     handleEditFormSubmit = e => {
//         e.preventDefault();
//         const{eventDate,eventTime,eventBorough,eventLoc,eventZip,eventName,email,isVeg,donations,numberOfPortions}= this.state
//         this.state;
//         axios
//           .patch("/editEvent", {
//               username: username,
//               password: password,
//               email: email,
//               first_name: firstname,
//               last_name: lastname,
//               eventDate: eventDate,
//               eventTime: eventTime,
//               eventBorough: eventBorough,
//               eventLoc: eventLoc,
//               eventZip: eventZip,
//               eventName: eventName,
//               isVeg: isVeg,
//               donations: donations,
//               numberOfPortions: numberOfPortions,
//           })
//           .then(res => {
//             this.setState({
//               message: 'success',
//               isLoggedIn: true,
//             });
//           })
//           .catch(err => {
//             this.setState({
//               message: `Error registering. ${err.response.data.detail}`,
//             });
//           });
//       }
    
  
    
// render(){
// return (
//   <div className="editEvent">
//    <form className='editEventForm'onChange={this.handleInputChange} onSubmit={this.handleEditFormSubmit}>
   
// <input type='text' className='dateInput' placeholder='event Date'value='eventDate'> </input>
// <input type='text' className='timeInput' placeholder='event Time'value='eventTime'> </input>
// <input type='text' className='boroughInput' placeholder='event Borough'value='eventBorough'> </input>
// <input type='text' className='locationInput' placeholder='event Location'value='eventLoc'> </input>
// <input type='text' className='zipInput' placeholder='event Zipcode'value='eventZip'> </input>
// <input type='text' className='eventName' placeholder='event Name'value='eventName'> </input>
// <input type='text' className='EventholderEmail' placeholder='email'value='email'> </input>
// <input type='text' className='veggie' placeholder='is at most vegeterain(yes/no)'value='isVeg'> </input>
// <input type='text' className='DonationList' placeholder='donations seperated by commas'value='dontations'> </input>
// <input type='text' className='portions' placeholder='number of portions (1 portion = 30 meals)'value='numberOfPortions'> </input>

//     </form>
//   </div>
// );
// }
// }




// export default EditEvent;
