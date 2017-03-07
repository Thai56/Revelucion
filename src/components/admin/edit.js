import React, { Component } from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';
import './admin.scss';

export default class AdminEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: null, artists: null
    };
  }
  componentWillMount() {
    axios.get('/api/currentAdmin').then(() => {
    })
    .catch(() => {
      hashHistory.push('/admin');
    });
    axios.get('/api/employees')
    .then((response) => {
      this.setState({
        employees: response.data
      });
    })
    .catch(err => {
      console.log(err);
    });
  }
  render() {
    let employees;

    if (this.state.employees) {
       employees = this.state.employees.map((employee, i) =>
          <li
            key={i}
            onClick={() => {
              hashHistory.push(`/admin/edit/employee/${employee.id}`);
            }}
          >
            {employee.last_name},{employee.first_name}
          </li>
      );
    }

    return (
      <section id='edit-container'>
        <div className="edit-controls">
          <h1>Hello Welcome to Admin Edit You made it!</h1>
          <button
            onClick={() => {
            axios.post('/api/admin/logout').then(() => {
              hashHistory.push('/');
            })
            .catch(() => {
              alert('there was an error please try again');
            });
          }}
          >Click To logout</button>
          <div>What would you like to Do?</div>
          <div id='admin-nav'>
            <ul>
              <li>
                <button
                onClick={() => {
                  axios.get('/api/artists').then(response => {
                    this.setState({ artists: response.data });
                    console.log(this.state.artists);
                  });
                }}
                >Edit PROFILE</button></li>
              {this.state.artists ? this.state.artists.map((artist, i) =>
                  <h3
                    key={i}
                    onClick={() => {
                      hashHistory.push(`/admin/edit/profile/${artist.id}`);
                    }}
                  >
                    {artist.title}</h3>
              ) : null}
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
    );
  }
}
