import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const AdminHome = (props) => {
  const { username } = props;

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <Link to="/admin/users">Users</Link>
      <Link to="/admin/patterns">Patterns</Link>
    </div>
  );
};

const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(AdminHome);
