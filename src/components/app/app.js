import React , { Component } from 'react'
import IMG_URL from '../../img/BarbershopLogo.jpg'
import Header from '../header/header'
import Footer from '../footer/footer'
import './reset.scss'
import './app.scss'
import { Parallax , Background} from 'react-parallax';

export default class App extends Component {
  render(){

    return (
      <section id='app-container'>
      <Header />
        <div className='parallax' id="body">
        {this.props.children}
      </div>
      <Footer />

      </section>
    )
  }
}
