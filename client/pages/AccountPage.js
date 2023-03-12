import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import Button from '../components/Button.js';

const AccountPage = ({ handleClick, isLoggedIn, isAdmin, username }) => {
  return (
    <div>
      <h1>Hello, {username}</h1>

      {isAdmin ? (
        <div>
          <Link to="/admin/users">Users</Link>
          <Link to="/admin/patterns">Patterns</Link>
        </div>
      ) : (
        'You are not an admin. Show account info and order history.'
      )}

      <Button
        backgroundColor="bg-yellow-200"
        textColor="text-orange-200"
        border="2"
      >
        <a href="/login" onClick={handleClick}>
          Logout
        </a>
      </Button>
    </div>
  );
};

const mapState = (state) => {
  console.log('state', state);
  return {
    isLoggedIn: !!state.auth.id,
    isAdmin: state.auth.isAdmin,
    username: state.auth.username,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(AccountPage);
