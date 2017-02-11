import React , {Component} from 'react';
import './artists.scss';
import axios from 'axios';
import Artist from './artist'
const ARTIST_URL = `http://localhost:1701/api/artists`;

export default class Artists extends Component {
  constructor(props){
    super(props)
    this.state = {
      artists:null
    }
    this.getAllArtists = this.getAllArtists.bind(this)
  }
  getAllArtists(){
    axios.get(`${ARTIST_URL}`).then(response => {
      this.setState({artists:response.data})
    })
  }
  componentWillMount(){
    this.getAllArtists()
  }
  render(){
    let artists;
    if(this.state.artists){
      artists = this.state.artists.artists.map((artist,index)=>{
        return (
          <Artist
            key={index}
            artist ={artist}
          />
        )
      })
    }
    return (
      <section id='artists'>
      <h1>
      This is the Artist Page
      </h1>
      {artists}
      </section>
    )
  }
}
