import React, { Component } from 'react';
import '../styles/galleryStyle.scss';

export default class GalleryContainer extends Component {
  render() {
    return (
      <div className="gallery-container">
        <header className='gallery-header'>
          <div className='gallery-header-title'>Gallery</div>
        </header>
        <div className='galleryPic-wrapper'>
          <div id='pic1' className='galleryPic' />
          <div id='pic2' className='galleryPic' />
          <div id='pic3' className='galleryPic' />
          <div id='pic4' className='galleryPic' />
          <div id='pic5' className='galleryPic' />
          <div id='pic6' className='galleryPic' />
          <div id='pic7' className='galleryPic' />
          <div id='pic8' className='galleryPic' />
          <div id='pic9' className='galleryPic' />
          <div id='pic11' className='galleryPic' />
          <div id='pic12' className='galleryPic' />
          <div id='pic13' className='galleryPic' />
          <div id='pic14' className='galleryPic' />

        </div>
      </div>
    );
  }
}
