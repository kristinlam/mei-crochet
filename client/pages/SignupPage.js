import React from 'react';
import { Link } from 'react-router-dom';
import { Signup } from '../components/AuthForm';

const SignupPage = () => {
  return (
    <div className="h-screen bg-beige-100 text-orange-300 flex flex-col items-center justify-center">
      <h1 className="mb-8">Join us!</h1>
      <div className="mb-12">
        <Signup />
      </div>
      <div className="text-xl text-center">
        <p className="font-bold">Already have an account?</p>
        <Link className="underline" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
