import React, { useState } from 'react';
import PatternEdit from './PatternEdit';
import Button from '../Button';

const Pattern = ({ pattern }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  return (
    <div>
      {showEdit ? (
        <PatternEdit pattern={pattern} onSubmit={handleSubmit} />
      ) : (
        <div>
          <div>
            <p>ID: {pattern.id}</p>
            <p>Name: {pattern.name}</p>
            <p>Creator: {pattern.creator}</p>
            <p>Description: {pattern.description}</p>
            <p>Price: {pattern.price}</p>
            <p>Image: {pattern.image}</p>
            <p>Link: {pattern.link}</p>
          </div>
          <Button border onClick={handleEdit}>
            Edit
          </Button>
        </div>
      )}
    </div>
  );
};

export default Pattern;
