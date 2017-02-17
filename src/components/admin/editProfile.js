import React , { Component } from 'react'
import {
  hashHistory,
  params
} from 'react-router';
import axios from 'axios';
export default class EditProfile extends Component {
  constructor(props){
    super(props)

    this.state = {
      artists:null,
      first_name:null,
      last_name:null,
      
    }
  }
  componentWillMount(){
    axios.get(`/api/artists/${this.props.params.id}`).then(response=>{
      this.setState({artists:response.data})
    })
    .catch(err=>{
      console.log(err);
    })
  }
  render(){
    return (
      <section>
      <h1>Hello from editProfile</h1>
      {this.state.artists ? this.state.artists.map((artist,i)=>{
        return (
          <div key={i}>
              <form>
                First Name: <input placeholder={artist.first_name}/><br/>
                Last Name: <input placeholder={artist.last_name}/><br/>
                Title: <input placeholder={artist.title}/><br/>
                Number: <input placeholder={artist.number}/><br/>
                Summary: <textarea placeholder={artist.summary}></textarea>
              </form>
          </div>
        )
      }) : null}
      </section>
    )
  }
}
