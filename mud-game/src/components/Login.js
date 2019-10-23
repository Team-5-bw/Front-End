import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  };

  inputChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitValues = ({ username, email, password }) => {
    console.log({ username, email, password });
    this.setState({
      username: username,
      email: email,
      password: password
    });
    const herokurl = 'https://team5-mud.herokuapp.com';
    console.log('this state', this.state);

    axios({
      url: `${herokurl}/api/login/`,
      method: 'POST',
      data: {
        username: `${this.state.username}`,
        password: `${this.state.password}`,
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
          type='password'
          name='password'
          value={this.state.password}
          onChange={this.inputChangeHandler}
        ></input>
        <button type='submit' onSubmit={e => this.submitHandler(e)}>
          Submit
        </button>
      </form>
    );
  }
}

export default Login;
