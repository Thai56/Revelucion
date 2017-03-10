// import axios from 'axios';
import React, { Component } from 'react';
import '../styles/galleryStyle.scss';


const userFeed = new Instafeed({
    get: 'user',
    // userId: '774796624',
    userId: '4160545573',
    // accessToken: '774796624.a3e5102.4b0e8a8a646d4e54998a495470dcf744'
    accessToken: '4160545573.2d47666.54888f07b4b84b6581ce4bc981e10cf6'
});

export default class GalleryContainer extends Component {
  componentWillMount() {
    userFeed.run();
  }
  render() {
    return (
      <div className="gallery-container">
        <header className='gallery-header'>
          <div className='gallery-header-title'>Gallery</div>
        </header>
        <div className="walk-in-text">
          We take walk-ins and and kids of all ages
        </div>
        <div className="instafeed-wrapper">
          <section className='instafeed-container'>
            <div id='instafeed' />
          </section>
        </div>

      </div>
    );
  }
}
// <div className='galleryPic-wrapper'>
//   <div id='pic1' className='galleryPic' />
//   <div id='pic2' className='galleryPic' />
//   <div id='pic3' className='galleryPic' />
//   <div id='pic4' className='galleryPic' />
//   <div id='pic5' className='galleryPic' />
//   <div id='pic6' className='galleryPic' />
//   <div id='pic7' className='galleryPic' />
//   <div id='pic8' className='galleryPic' />
//   <div id='pic9' className='galleryPic' />
//   <div id='pic11' className='galleryPic' />
//   <div id='pic12' className='galleryPic' />
//   <div id='pic13' className='galleryPic' />
//   <div id='pic14' className='galleryPic' />
//
// </div>
