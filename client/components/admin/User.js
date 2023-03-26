import React, { useState } from 'react';
import UserEdit from './UserEdit';
import Button from '../Button';

const User = ({ user }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  return (
    <div className="mb-8">
      {showEdit ? (
        <div>
          <UserEdit user={user} onSubmit={handleSubmit} />
          <Button border onClick={handleEdit}>
            Cancel
          </Button>
        </div>
      ) : (
        <div>
          <div className="mb-4">
            <p>ID: {user.id}</p>
            <p>Username: {user.username}</p>
            <p>Account Type: {user.isAdmin ? 'Admin' : 'User'}</p>
          </div>
          <Button border onClick={handleEdit}>
            Edit
          </Button>
        </div>
      )}
    </div>
  );
};

export default User;
