import React , { Component } from 'react'
import IMG_URL from '../../img/BarbershopLogo.jpg'
import Header from '../header/header'
import Footer from '../footer/footer'
import './reset.scss'
import { Parallax , Background} from 'react-parallax';

export default class App extends Component {
  render(){
  //   const backgroundStyle = {
  //     height:'100vh',
  //     width:'100vw',
  //     background:`#B09B7E`,
  //     backgroundSize:'cover',
  //     backgroundPosition:'center'
  //   }

    return (
      <section id='app-container'>

      <Parallax bgImage='src/img/BarberShopLogo.jpg' strength={70}>

      <Header />
        <div id="body">
        {this.props.children}
      </div>
      <Footer />
      </Parallax>

      </section>
    )
  }
}
