import React, { Component } from 'react';
import '../styles/DirectionsStyle.scss';
import MapContainer from './MapContainer.js';

function Address() {
  return (
    <div className='address-wrapper'>
      <span className='located'>Located</span><br />
      156 W 500 S, Provo, UT 84601
    </div>
  );
}

function Hours() {
  return (
    <div className="hours-container">
      <Address />
    <div><span className='hours'>Monday: 10am to 9pm</span></div>
    <div><span className='hours'>Tuesday: 2pm to 9pm</span></div>
    <div><span className='hours'>Wednesday: closed</span></div>
    <div><span className='hours'>Thursday: 10am to 9pm</span></div>
    <div><span className='hours'>Friday: 10am to 11:30pm</span></div>
    <div><span className='hours'>Saturday: 10am to 11:30pm</span></div>
    <div><span className='hours'>Sunday: 10am to 6pm</span></div>
    </div>
  );
}

export function Header() {
  return (
    <header className="directions-header">
      <div className='directions-header-title'>Directions and Hours</div>
    </header>
  );
}

export default class DirectionsContainer extends Component {
  render() {
    const location = {
      lat: 40.227775,
      lng: -111.661229
    };
    const markers = [{ location: { lat: 40.227775, lng: -111.661229 } }];
    return (
      <div className="Directions-container">
        <Header /> <br />

      <section className='directions-wrapper'>
        <div style={{ height: 900, width: 500, border: '4px solid black', marginBottom: 36 }}>
          <MapContainer
            center={location}
            markers={markers}
          />
        </div>
        <Hours /> <br />
      </section>

      </div>
    );
  }
}
