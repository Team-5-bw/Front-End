import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
  state = {
    username: '',
    email: '',
    password1: '',
    password2: ''
  };

  inputChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitValues = ({ username, email, password1, password2 }) => {
    console.log({ username, email, password1, password2 });
    this.setState({
      username: username,
      email: email,
      password1: password1,
      password2: password2
    });
    const herokurl = 'https://lambda-mud-test.herokuapp.com';
    console.log('this state', this.state);

    axios({
      url: `${herokurl}/api/registration/`,
      method: 'POST',
      data: {
        username: `${this.state.username}`,
        password1: `${this.state.password1}`,
        password2: `${this.state.password2}`,
        email: `${this.state.email}`
      }
    })
      .then(res => {
        console.log('response', res);
        const token = res.data['key'];
        localStorage.setItem('token', `Token ${token}`);
        this.props.history.push('/adventure');
      })
      .catch(err => {
        console.log('Axios error:', err);
      });
  };

  submitHandler = ev => {
    ev.preventDefault();
    this.submitValues(this.state);
  };

  render() {
    return (
      <form onSubmit={e => this.submitHandler(e)}>
        <input
          type='text'
          name='username'
          value={this.state.username}
          onChange={this.inputChangeHandler}
        ></input>
        <input
          type='email'
          name='email'
          value={this.state.email}
          onChange={this.inputChangeHandler}
        ></input>
        <input
          type='password'
          name='password1'
          value={this.state.password1}
          onChange={this.inputChangeHandler}
        ></input>
        <input
          type='password'
          name='password2'
          value={this.state.password2}
          onChange={this.inputChangeHandler}
        ></input>
        <button type='submit' onSubmit={e => this.submitHandler(e)}>
          Submit
        </button>
      </form>
    );
  }
}

export default Register;
