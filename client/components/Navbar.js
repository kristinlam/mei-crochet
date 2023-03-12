import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => (
  <nav className="font-serif text-beige-100 bg-green-200 px-6 py-4 text-xl h-16 md:h-[4.5rem] flex flex-row items-center justify-between">
    <div className="flex gap-x-10 items-center">
      <Link className="text-4xl" to="/">
        Mei Crochet
      </Link>
      <Link to="/shop">Shop</Link>
    </div>

    <div className="flex gap-x-10 items-center">
      {isLoggedIn ? (
        <Link to="/account">Account</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
      <Link to="/cart">Cart</Link>
    </div>
  </nav>
);

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

export default connect(mapState, null)(Navbar);
