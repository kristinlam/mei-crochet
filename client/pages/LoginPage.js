import React from 'react';
import { Link } from 'react-router-dom';
import { Login } from '../components/AuthForm';
import FullPageLayout from '../layouts/FullPageLayout';

const LoginPage = () => {
  return (
    <FullPageLayout xCentered className="py-20">
      <h1 className="mb-8">Hi again!</h1>
      <Login />
      <div className="text-xl text-center">
        <p className="font-bold">New around here? Create an account!</p>
        <Link className="underline" to="/signup">
          Sign up
        </Link>
      </div>
    </FullPageLayout>
  );
};

export default LoginPage;
