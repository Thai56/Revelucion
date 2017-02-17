import React , {Component} from 'react'
import {Link} from 'react-router'
import './header.scss'
import Linkify from 'react-linkify'
const SQUARE_URL = 'https://squareup.com/appointments/book/75BKFJ631TKYD/the-revolucion-barbershop-co'

export default class Header extends Component {
  render(){
    return (
      <header>
        <section id='logo'>
          REVOLUCION
        </section>
        <Linkify>
          <a href={SQUARE_URL}>
          <div id='booking'>
          Online Booking
          </div>
          </a>
        </Linkify>

        <nav>
        <ul >

            <li>
              <span>
                <Link
                   to='/artists'
                   activeStyle={{color:"red"}}>
                ARTISTS
              </Link>
              </span>
            </li>

            <li>
              <span>
                <Link
                   to='/services'
                   activeStyle={{color:"red"}}>
                SERVICES
              </Link>
              </span>
            </li>
          <Link to='/gallery'>
            <li>
              <span>GALLERY</span>
            </li>
          </Link>
            <li>
              <span>DIRECTIONS & HOURS</span>
            </li>
        </ul>
        </nav>

      </header>
    )
  }
}
