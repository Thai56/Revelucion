import React , {Component} from 'react'
import axios from 'axios'
import {hashHistory} from 'react-router'
export default class AdminEdit extends Component {
  componentWillMount(){
    axios.get('/api/currentAdmin').then(response=> {
      console.log(response.data)
    })
    .catch(err=>{
      hashHistory.push('/admin')
    })
  }
  render(){
    return (
      <section>
        <h1>Hello Welcome to Admin Edit You made it!</h1>
        <button onClick={()=>{
          axios.post(`/api/admin/logout`).then(response=>{
            hashHistory.push('/')
          })
          .catch(err => {
            alert('there was an error please try again')
          })
        }}>Click To logout</button>
        <div>What would you like to Do?</div>
        <div id='admin-nav'>
        <ul>
        <li><button>Edit PROFILE</button></li>
        <li><button>Edit GALLERY</button></li>
        <li><button>Edit SERVICES</button></li>
        </ul>
        </div>
      </section>
    )
  }
}
