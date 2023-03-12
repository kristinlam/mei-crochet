import React from 'react';
import { Link } from 'react-router-dom';
import { Login } from '../components/AuthForm';
import FullScreenCenteredDivLayout from '../layouts/FullScreenCenteredDivLayout';

const LoginPage = () => {
  return (
    <FullScreenCenteredDivLayout
      backgroundColor="bg-beige-100"
      textColor="text-orange-300"
      heading="Hi again!"
    >
      <Login />

      <div className="text-xl text-center">
        <p className="font-bold">New around here? Create an account!</p>
        <Link className="underline" to="/signup">
          Sign up
        </Link>
      </div>
    </FullScreenCenteredDivLayout>
  );
};

export default LoginPage;
