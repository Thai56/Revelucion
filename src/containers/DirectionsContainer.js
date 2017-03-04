import React , { Component } from 'react';
import '../styles/DirectionsStyle.scss'
import MapContainer from './MapContainer.js';

function Hours(props){
  return (
    <div className="Hours-container">
    <div>Monday: <span className='hours'> 10am to 9pm</span></div>
    <div>Tuesday: <span className='hours'> 10am to 9pm</span></div>
    <div>Wednesday: <span className='hours'>closed</span></div>
    <div>Thursday: <span className='hours'> 10am to 9pm</span></div>
    <div>Friday: <span className='hours'> 10am to 11:30pm</span></div>
    <div>Saturday: <span className='hours'> 10am to 11:30pm</span></div>
    <div>Sunday: <span className='hours'> 10am to 6pm</span></div>
    </div>
  )
}

function Header(props){
  return (
    <div className="">
      <h1>Revolucion Barber Shop</h1>
      <span>156 W 500 S, Provo, UT 84601</span>
    </div>
  )
}

export default class DirectionsContainer extends Component {
  render(){
    const location = {
      lat: 40.227775,
      lng: -111.661229
    }
    const markers = [
      {
        location: {
          lat: 40.227775,
          lng: -111.661229
        }
      }
    ]
    return (
      <div className="Directions-container">
        <Header /> <br />
        <Hours /> <br />
        <div style={{height:600,width:300,background:'red'}}>
          <MapContainer
            center={location}
            markers={markers}
          />
        </div>
      </div>
    )
  }
}
