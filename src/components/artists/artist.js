import React, { Component } from 'react';

export default class Artist extends Component {
  render() {
const picStyle = {
      height: 400,
      width: 400,
      backgroundImage: `url(${this.props.artist.image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      margin: 'auto'
    };
    const URL = `https://www.${this.props.artist.insta}`;
    return (
      <section id='artist-container'>
        <div style={picStyle} />
        <h4>{this.props.artist.title}</h4>
          <a href={URL}>
            <span>{this.props.artist.insta}</span>
          </a>
        <div id='summary-container'>
          <h4>{this.props.artist.summary}</h4>
        </div>
      </section>
    );
  }
}
