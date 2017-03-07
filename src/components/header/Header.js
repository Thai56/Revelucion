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
        <ul >

            <li>
              <span>
                <Link to='/artists' activeStyle={{ color: 'red' }}>
                ARTISTS
                </Link>
              </span>
            </li>

            <li>
              <span>
                <Link to='/services' activeStyle={{ color: 'red' }}>
                  SERVICES
                </Link>
              </span>
            </li>
          <Link to='/gallery' activeStyle={{ color: 'red' }}>
            <li>
              <span>GALLERY</span>
            </li>
          </Link>
            <li>
              <Link to='/products' activeStyle={{ color: 'red' }}>
                <span>APPAREL</span>
              </Link>
            </li>
          <Link to='/directions'>
            <li>
              <span>DIRECTIONS & HOURS</span>
            </li>
          </Link>
        </ul>
        </nav>

      </header>
    );
  }
}
