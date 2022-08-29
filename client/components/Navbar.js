import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <nav className="bg-beige uppercase text-green-200 border-b-2 px-6 py-4">
    {isLoggedIn ? (
      <div className="flex flex-row items-center justify-between">
        <div className="flex-1 flex gap-x-10 items-end">
          <Link className="text-2xl" to="/">
            Mei Crochet
          </Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="flex-1 justify-end flex gap-x-10 items-end">
          <Link to="/admin">Admin Dashboard</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      </div>
    ) : (
      <div className="flex flex-row items-center justify-between">
        <div className="flex-1 flex gap-x-10 items-end">
          <Link className="text-2xl" to="/">
            Mei Crochet
          </Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="flex-1 justify-end flex gap-x-10 items-end">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    )}
  </nav>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
