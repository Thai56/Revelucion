import Linkify from 'react-linkify';
import React, { Component } from 'react';
import { Link } from 'react-router';
import './header.scss';


const SQUARE_URL = 'https://squareup.com/appointments/book/75BKFJ631TKYD/the-revolucion-barbershop-co';

export default class Header extends Component {
  render() {
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
        <ul>
            <li>
              <span>
                <Link className='anchor' to='/artists' activeStyle={{ color: 'blue' }}>
                ABOUT
                </Link>
              </span>
            </li>
            <li>
              <span>
                <Link className='anchor' to='/services' activeStyle={{ color: 'blue' }}>
                  SERVICES
                </Link>
              </span>
            </li>
            <li>
              <span>
                <Link className='anchor' to='/gallery' activeStyle={{ color: 'blue' }}>
                  GALLERY
                </Link>
              </span>
            </li>
            <li>
              <span>
                <Link className='anchor' to='/products' activeStyle={{ color: 'blue' }}>
                  APPAREL
                </Link>
              </span>
            </li>
            <li>
              <span>
                <Link className='anchor' to='/directions' activeStyle={{ color: 'blue' }}>
                  DIRECTIONS & HOURS
                </Link>
              </span>
            </li>
        </ul>
        </nav>

      </header>
    );
  }
}
