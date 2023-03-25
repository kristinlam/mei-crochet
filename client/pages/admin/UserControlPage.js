import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../store/users';
import FullPageLayout from '../../layouts/FullPageLayout';

const UserControlPage = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <FullPageLayout>
      <h1 className="text-center mb-6">User Dashboard</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p>ID: {user.id}</p>
          <p>Username: {user.username}</p>
          <p>Account Type: {user.isAdmin ? 'Admin' : 'User'}</p>
        </div>
      ))}
    </FullPageLayout>
  );
};

export default UserControlPage;
