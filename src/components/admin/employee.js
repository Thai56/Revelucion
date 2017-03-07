import axios from 'axios';
import React, { Component } from 'react';
import {
  hashHistory
} from 'react-router';

const EMPLOYEE_URL = '/api/employees';
export default class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = { employee: null };
  }
  componentWillMount() {
    axios.get(`${EMPLOYEE_URL}/${this.props.params.id}`)
    .then(response => {
      this.setState({ employee: response.data });
    })
    .catch(err => {
      console.log(err);
    });
  }
  render() {
    return (
      <div>
      <button
        onClick={() => {
        hashHistory.push('/admin/edit');
      }}
      >Back</button>
        {this.state.employee ? <div>
          <h1>{this.state.employee[0].first_name},{this.state.employee[0].last_name}</h1>
         Points:
         {this.state.employee[0].employee_points ? this.state.employee[0].employee_points : 0}
          </div>
        : null}
      </div>
    );
  }
}
