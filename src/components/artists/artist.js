import React , { Component } from 'react'

export default class Artist extends Component {
  render(){
    return (
      <section>
        <h4>{this.props.artist.name}</h4>
        <h4>Artist Picture</h4>
        <h4>Artist Title</h4>
        <h4>Artist Portfolio</h4>
        <h4>Artist Summary</h4>
      </section>
    )
  }
}
