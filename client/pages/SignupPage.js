import React from 'react';
import { Link } from 'react-router-dom';
import { Signup } from '../components/AuthForm';
import FullPageLayout from '../layouts/FullPageLayout';

const SignupPage = () => {
  return (
    <FullPageLayout
      centered
      backgroundColor="bg-beige-100"
      textColor="text-orange-300"
    >
      <h1 className="mb-8">Join us!</h1>
      <Signup />

      <div className="text-xl text-center">
        <p className="font-bold">Already have an account?</p>
        <Link className="underline" to="/login">
          Login
        </Link>
      </div>
    </FullPageLayout>
  );
};

export default SignupPage;
