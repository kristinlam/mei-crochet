import React from 'react';
import { connect } from 'react-redux';

/**
 * COMPONENT
 */
export const AdminHome = (props) => {
  const { username } = props;

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <p>View all users</p>
      <p>Manage patterns</p>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(AdminHome);
