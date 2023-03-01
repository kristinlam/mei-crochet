import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from '../../store/users';

const UserDashboard = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>User Dashboard</h1>
      {users.map((user) => (
        <div>
          <p>ID: {user.id}</p>
          <p>Username: {user.username}</p>
          <p>Account Type: {user.isAdmin ? 'Admin' : 'User'}</p>
        </div>
      ))}
    </div>
  );
};

export default UserDashboard;
