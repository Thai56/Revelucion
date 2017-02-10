import React , {Component} from 'react'
import {Link} from 'react-router'
import './header.scss'

export default class Header extends Component {
  render(){
    return (
      <header>
      <div id='booking'>
      Online Booking
      </div>
        <nav>
        <ul >
          <Link to='/artists'>
            <li>
              <span>ARTISTS</span>
            </li>
          </Link>
          <Link to='/services'>
            <li>
              <span>SERVICES</span>
            </li>
          </Link>
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
