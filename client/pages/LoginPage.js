import React from 'react';
import { Link } from 'react-router-dom';
import { Login } from '../components/AuthForm';

const LoginPage = () => {
  return (
    <div>
      <h1>Welcome Back</h1>
      <Login />
      <div>
        <p>New around here? Create an account!</p>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default LoginPage;
