import React, { Component } from 'react';
import './apparel.scss';


export default class Apparel extends Component {
  render() {
      return (
        <div className='apparel-container'>
          <header>
            <div className="apparel-title">Apparel</div>
          </header>
          <div className='place-holder'>More coming soon...</div>
          <div className='shirt-image' />
         </div>
      );
  }
}
