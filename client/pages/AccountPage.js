import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import FullPageLayout from '../layouts/FullPageLayout';
import Button from '../components/Button.js';

const AccountPage = ({ handleClick, isLoggedIn, isAdmin, username }) => {
  return (
    <FullPageLayout xCentered>
      <h1>Hello, {username}</h1>

      {isAdmin ? (
        <div>
          <Link className="underline" to="/admin/users">
            Users
          </Link>
          <Link className="underline" to="/admin/patterns">
            Patterns
          </Link>
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
    </FullPageLayout>
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
