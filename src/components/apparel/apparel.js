import React, { Component } from 'react';
import './apparel.scss';


export default class Apparel extends Component {
  render() {
    // come by the shop to get one soon!
      return (
        <div className='apparel-container'>
          <header>
            <div className="apparel-title">Apparel</div>
          </header>
          <div className='place-holder'>More Coming Soon...</div>

          <div className="pitch-text">
            Come in today and get your Revolución t-shirt.
          </div>
          <section className='apparel-wrapper'>
            <div className='shirt-image' />
            <div className='shirt-image-1' />
            <div className='shirt-image-2' />
          </section>

         </div>
      );
  }
}
