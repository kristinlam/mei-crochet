import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser, deleteUser } from '../../store/users';
import Button from '../Button';

const UserEdit = ({ user, onSubmit }) => {
  const [editedUser, setEditedUser] = useState(user);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    dispatch(updateUser(editedUser));
  };

  return (
    <div>
      <p>ID: {user.id}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={editedUser.username}
            onChange={(event) =>
              setEditedUser({
                ...editedUser,
                username: event.target.value,
              })
            }
          />
        </div>

        <div>
          <label>Account Type</label>
          <div>
            <label>
              <input
                type="radio"
                name="isAdmin"
                value="true"
                checked={editedUser.isAdmin === true}
                onChange={(event) =>
                  setEditedUser({
                    ...editedUser,
                    isAdmin: event.target.value === 'true',
                  })
                }
              />
              Admin
            </label>
            <label>
              <input
                type="radio"
                name="isAdmin"
                value="false"
                checked={editedUser.isAdmin === false}
                onChange={(event) =>
                  setEditedUser({
                    ...editedUser,
                    isAdmin: event.target.value === 'true',
                  })
                }
              />
              User
            </label>
          </div>
        </div>
        <Button border>Save</Button>
      </form>
      <Button border onClick={() => handleDelete(user.id)}>
        Delete
      </Button>
    </div>
  );
};

export default UserEdit;
