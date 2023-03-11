import React from 'react';
import { Link } from 'react-router-dom';
import { Signup } from '../components/AuthForm';

const SignupPage = () => {
  return (
    <div>
      <h1>Create an Account</h1>
      <Signup />
      <div>
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default SignupPage;
