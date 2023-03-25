import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatePattern, deletePattern } from '../../store/patterns';
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
    dispatch(updatePattern(editedPattern));
  };

  return (
    <div>
      <p>ID: {pattern.id}</p>
      <form onSubmit={handleSubmit}>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>

        <Button border>Save</Button>
      </form>

      <Button border onClick={() => handleDelete(pattern.id)}>
        Delete
      </Button>
    </div>
  );
};

export default PatternEdit;
