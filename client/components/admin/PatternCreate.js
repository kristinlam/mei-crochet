import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPattern } from '../../store/patterns';
import Button from '../Button';
import Modal from '../Modal';

const PatternCreate = () => {
  const initialPattern = {
    name: '',
    creator: '',
    description: '',
    price: '',
    image: '',
    link: '',
  };

  const [newPattern, setNewPattern] = useState(initialPattern);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (event, pattern) => {
    event.preventDefault();
    dispatch(createPattern(pattern));
    setNewPattern(initialPattern);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button border onClick={() => setShowModal(false)}>
        OK
      </Button>
    </div>
  );

  return (
    <form onSubmit={(event) => handleSubmit(event, newPattern)}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={newPattern.name}
          onChange={(event) =>
            setNewPattern({
              ...newPattern,
              name: event.target.value,
            })
          }
        />
      </div>
      <div>
        <label>Creator</label>
        <input
          type="text"
          value={newPattern.creator}
          onChange={(event) =>
            setNewPattern({
              ...newPattern,
              creator: event.target.value,
            })
          }
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={newPattern.description}
          onChange={(event) =>
            setNewPattern({
              ...newPattern,
              description: event.target.value,
            })
          }
        />
      </div>
      <div>
        <label>Price</label>
        <input
          type="number"
          value={newPattern.price}
          onChange={(event) =>
            setNewPattern({
              ...newPattern,
              price: event.target.value,
            })
          }
        />
      </div>
      <div>
        <label>Image</label>
        <input
          type="text"
          value={newPattern.image}
          onChange={(event) =>
            setNewPattern({
              ...newPattern,
              image: event.target.value,
            })
          }
        />
      </div>
      <div>
        <label>Link</label>
        <input
          type="text"
          value={newPattern.link}
          onChange={(event) =>
            setNewPattern({
              ...newPattern,
              link: event.target.value,
            })
          }
        />
      </div>

      <Button border>Add</Button>
      {showModal && (
        <Modal onClose={handleClose} actionBar={actionBar}>
          <p>Pattern created successfully.</p>
        </Modal>
      )}
    </form>
  );
};

export default PatternCreate;
