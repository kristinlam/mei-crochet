import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => (
  <nav className="font-serif text-orange-300 border-b-4 bg-yellow-100 px-6 py-4 text-xl">
    <div className="flex flex-row items-center justify-between">
      <div className="flex-1 flex gap-x-10 items-end">
        <Link className="text-4xl" to="/">
          Mei Crochet
        </Link>
        <Link to="/shop">Shop</Link>
      </div>

      <div className="flex-1 justify-end flex gap-x-10 items-end">
        {isLoggedIn ? (
          <div className="flex-1 justify-end flex gap-x-10 items-end">
            <Link to="/account">Account</Link>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  </nav>
);

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

export default connect(mapState, null)(Navbar);
