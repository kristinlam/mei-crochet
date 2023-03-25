import React, { useState } from 'react';
import PatternEdit from './PatternEdit';
import Button from '../Button';

const Pattern = ({ pattern }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleEditClick = () => {
    console.log('edit clicked');
  };

  const handleDeleteClick = () => {
    console.log('delete clicked');
  };

  return (
    <div>
      {showEdit ? (
        <p>PatternEdit here</p>
      ) : (
        <div>
          <p>ID: {pattern.id}</p>
          <p>Name: {pattern.name}</p>
          <p>Creator: {pattern.creator}</p>
          <p>Description: {pattern.description}</p>
          <p>Price: {pattern.price}</p>
          <p>Image: {pattern.image}</p>
          <p>Link: {pattern.link}</p>
        </div>
      )}
      <div>
        <Button border onClick={handleEditClick}>
          Edit
        </Button>
        <Button border onClick={handleDeleteClick}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Pattern;
