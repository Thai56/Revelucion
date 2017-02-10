import React , { Component } from 'react'
import IMG_URL from '../../img/BarbershopLogo.jpg'
import Header from '../header/header'
import Footer from '../footer/footer'
import './reset.scss'
export default class App extends Component {
  render(){
    const backgroundStyle = {
      height:'100vh',
      width:'100vw',
      background:`#B09B7E`,
      backgroundSize:'cover',
      backgroundPosition:'center'
    }
    const sectionStyle ={
      background:`url(${IMG_URL})no-repeat`,
      backgroundSize:'100% 100%',
      backgroundPosition:'center'
    }
    return (
      <section style={backgroundStyle}>
      <Header />
      <div id="body">
        {this.props.children}
      </div>
      <Footer />
      </section>
    )
  }
}
