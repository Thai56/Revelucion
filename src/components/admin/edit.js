import React , {Component} from 'react'
import axios from 'axios'
import {hashHistory} from 'react-router'
import './admin.scss';
export default class AdminEdit extends Component {
  constructor(props){
    super(props)

    this.state = {
      employees:null
    }
  }
  componentWillMount(){
    axios.get('/api/currentAdmin').then(response=> {
    })
    .catch(err=>{
      hashHistory.push('/admin')
    })
    axios.get('/api/employees')
    .then((response)=>{
      this.setState({
        employees:response.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  render(){
    let employees;
    if(!!this.state.employees){
       employees = this.state.employees.map((employee,i) =>{
        return (
          <li key={i}>
            {employee.last_name},{employee.first_name}
          </li>
        )
      })
    }
    return (
      <section id='edit-container'>
        <div className="edit-controls">
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
              <li><button>Edit PRODUCTS</button></li>
            </ul>
          </div>
        </div>

        <div id='employee-container'>
          {employees}
        </div>
      </section>
    )
  }
}
