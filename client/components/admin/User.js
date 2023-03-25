import React, { useState } from 'react';
import Button from '../Button';

const User = ({ user }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div className="mb-8">
      <div>
        <p>ID: {user.id}</p>
        <p>Username: {user.username}</p>
        <p>Account Type: {user.isAdmin ? 'Admin' : 'User'}</p>
      </div>

      <Button border onClick={handleEdit}>
        Edit
      </Button>
    </div>
  );
};

export default User;
