import React from 'react';
import Login from './Login.js';
import Register from './Register.js';
import '../css/login.css';

const LoginRegister = props => {
  return (
    <div class='login'>
      <Login {...props} />
      <Register {...props} />
    </div>
  );
};

export default LoginRegister;
