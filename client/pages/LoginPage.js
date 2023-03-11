import React from 'react';
import { Link } from 'react-router-dom';
import { Login } from '../components/AuthForm';

const LoginPage = () => {
  return (
    <div>
      <Login />
      <p>New around here? Create an account!</p>
      <Link to="/signup">Sign up</Link>
    </div>
  );
};

export default LoginPage;
