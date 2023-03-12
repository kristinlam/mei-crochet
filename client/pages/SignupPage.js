import React from 'react';
import { Link } from 'react-router-dom';
import { Signup } from '../components/AuthForm';
import FullScreenCenteredDivLayout from '../layouts/FullScreenCenteredDivLayout';

const SignupPage = () => {
  return (
    <FullScreenCenteredDivLayout
      backgroundColor="bg-beige-100"
      textColor="text-orange-300"
      heading="Join us!"
    >
      <Signup />

      <div className="text-xl text-center">
        <p className="font-bold">Already have an account?</p>
        <Link className="underline" to="/login">
          Login
        </Link>
      </div>
    </FullScreenCenteredDivLayout>
  );
};

export default SignupPage;
