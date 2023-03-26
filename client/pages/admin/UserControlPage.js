import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../store/users';
import FullPageLayout from '../../layouts/FullPageLayout';
import User from '../../components/admin/User';

const UserControlPage = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <FullPageLayout>
      <h1 className="text-center mb-8">User Dashboard</h1>
      <div>
        <h2>Update</h2>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </FullPageLayout>
  );
};

export default UserControlPage;
