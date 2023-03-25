import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import FullPageLayout from '../layouts/FullPageLayout';
import Button from '../components/Button.js';

const AccountPage = () => {
  const { isAdmin, username } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <FullPageLayout xCentered>
      <h1 className="text-center mb-6">Hello, {username}</h1>

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

      <Button border>
        <a href="/login" onClick={handleLogout}>
          Logout
        </a>
      </Button>
    </FullPageLayout>
  );
};

export default AccountPage;
