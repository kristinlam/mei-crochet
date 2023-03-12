import React from 'react';
import { Link } from 'react-router-dom';
import { Login } from '../components/AuthForm';

const LoginPage = () => {
  return (
    <div className="h-screen bg-beige-100 text-orange-300 flex flex-col items-center justify-center">
      <h1 className="mb-8">Hi again!</h1>
      <div className="mb-12">
        <Login />
      </div>
      <div className="text-xl text-center">
        <p className="font-bold">New around here? Create an account!</p>
        <Link className="underline" to="/signup">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
