import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/footer';
import './reset.scss';
import './app.scss';
// import '../../../node_modules/instafeed.js/instafeed.min.js';

export default class App extends Component {

  render() {
    return (
      <section id='app-container'>
      <Header />
        <div className='parallax' id="body">
        {this.props.children}
      </div>
      <Footer />

      </section>
    );
  }
}
