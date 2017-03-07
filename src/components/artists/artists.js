import axios from 'axios';
import React, { Component } from 'react';
import './artists.scss';
import Artist from './artist';

const ARTIST_URL = '/api/artists';

export default class Artists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: null
    };
    this.getAllArtists = this.getAllArtists.bind(this);
  }

  componentWillMount() {
    this.getAllArtists();
  }

  getAllArtists() {
    axios.get(`${ARTIST_URL}`).then(response => {
      this.setState({ artists: response.data });
    });
  }
  render() {
    let artists;
    if (this.state.artists) {
      artists = this.state.artists.map((artist, index) =>
          <Artist
            key={index}
            artist={artist}
          />
      );
    }
    return (
      <section id='artists'>
      <header>
      <div className="artist-header-title">
        Artists
      </div>
    </header>
      {artists}
      </section>
    );
  }
}
