import React from 'react';
import '../../styles/about.scss';

export default function About() {
  //picture of the shop

  // header that is going to say second shop coming soon

  return (
    <div className="about-container">

    <header>
      <div className="about-title">
        About the Barbershop
      </div>
    </header>

    <div id="about-pic" />
    
      <section className='summary-wrapper'>
      The Revolucion Tattoo and Barber Shop in Provo is a place of community and
       acceptance. Our IMMEDIATE goal is to make you look amazing… whether you see E’Sau,
       Chipi, or Handsome. The ULTIMATE goal is to make friends, build a happy world and
       have a community full of differences.

Our clientele is forever growing because we’re cool people,
making cool people look great. Whatever your hair type – we know how to make
you look incredible. You’ll leave feeling like gold.
      </section>
      <div className="place-holder">
        Second Location Coming Soon!
      </div>
    </div>
  );
}
