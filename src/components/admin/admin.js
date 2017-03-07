import axios from 'axios';
import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import './admin.scss';

const ADMIN_URL = '/api/admin';

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: ''
    };
  }

  render() {
    return (
      <section id='admin-login'>
      <form className='form-admin'>
        <input
           onChange={(e) => {
             this.setState({ name: e.target.value });
        }}
          type='text' placeholder="AdminName"
        />
        <input
          onChange={(e) => {
          this.setState({ password: e.target.value });
        }}
          type='text' placeholder="PassWord"
        />
        <button
          onClick={(e) => {
          e.preventDefault();
          const admin = { name: this.state.name, password: this.state.password };
          axios.post(`${ADMIN_URL}`, admin).then(response => {
            if (!response.data) {
              alert('There was an issue try again');
            } else {
              hashHistory.push('/admin/edit/');
            }
          });
        }}
        >
        Login
      </button>
        <button
           onClick={() => {
          hashHistory.push('/');
        }}
        >Back</button>
      </form>
      </section>
    );
  }
}
