import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <nav>
    {isLoggedIn ? (
      <div className="bg-beige flex flex-row items-center justify-between">
        <div className="flex-1">
          <Link to="/admin">Admin Dashboard</Link>
        </div>

        <div className="flex-1 text-center">
          <Link to="/">Mei Crochet</Link>
        </div>
        <div className="flex-1 text-right">
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      </div>
    ) : (
      <div className="bg-beige flex flex-row items-center justify-between">
        <div className="flex-1">
          <Link to="/patterns">Patterns</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="flex-1 text-center">
          <Link to="/">Mei Crochet</Link>
        </div>
        <div className="flex-1 text-right">
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
