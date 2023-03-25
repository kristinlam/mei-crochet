import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePattern } from '../../store/patterns';
import Button from '../Button';

const PatternEdit = ({ pattern, onSubmit }) => {
  const [editedPattern, setEditedPattern] = useState(pattern);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletePattern(id));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    // WIP
    console.log('PatternEdit: Submit clicked');
  };

  return (
    <div>
      <p>ID: {pattern.id}</p>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={editedPattern.name}
          onChange={(event) =>
            setEditedPattern({
              ...editedPattern,
              name: event.target.value,
            })
          }
        />

        <label>Creator</label>
        <input
          type="text"
          value={editedPattern.creator}
          onChange={(event) =>
            setEditedPattern({
              ...editedPattern,
              creator: event.target.value,
            })
          }
        />

        <label>Description</label>
        <textarea
          value={editedPattern.description}
          onChange={(event) =>
            setEditedPattern({
              ...editedPattern,
              description: event.target.value,
            })
          }
        />

        <label>Price</label>
        <input
          type="number"
          value={editedPattern.price}
          onChange={(event) =>
            setEditedPattern({
              ...editedPattern,
              price: event.target.value,
            })
          }
        />

        <label>Image</label>
        <input
          type="text"
          value={editedPattern.image}
          onChange={(event) =>
            setEditedPattern({
              ...editedPattern,
              image: event.target.value,
            })
          }
        />

        <label>Link</label>
        <input
          type="text"
          value={editedPattern.link}
          onChange={(event) =>
            setEditedPattern({
              ...editedPattern,
              link: event.target.value,
            })
          }
        />

        <Button border>Save</Button>
      </form>

      <Button border onClick={() => handleDelete(pattern.id)}>
        Delete
      </Button>
    </div>
  );
};

export default PatternEdit;
