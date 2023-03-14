import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../store';
import Button from './Button';

const AuthForm = ({ name, displayName, handleSubmit, error }) => {
  return (
    <div>
      <form
        className="flex flex-col items-center mb-12"
        onSubmit={handleSubmit}
        name={name}
      >
        <div className="mb-2">
          <label htmlFor="username">Username</label>
          <input
            className="w-full border border-2 p-2 rounded-md focus:outline-none focus:border-green"
            name="username"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            className="w-full border border-2 p-2 rounded-md focus:outline-none focus:border-green"
            name="password"
            type="password"
          />
        </div>
        <div>
          <Button border type="submit">
            {displayName}
          </Button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  );
};

const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(authenticate(username, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
