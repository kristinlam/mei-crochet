import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSinglePattern } from '../store/singlePattern';

const SinglePattern = (props) => {
  const pattern = useSelector((state) => state.singlePattern);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSinglePattern(props.match.params.id));
  }, [dispatch]);

  return (
    <div>
      <div key={pattern.id}>
        <h1>{pattern.name}</h1>
        <img src={pattern.image} />
        <p>{pattern.price}</p>
        <p>{pattern.creator}</p>
        <p>{pattern.description}</p>
      </div>
    </div>
  );
};

export default SinglePattern;
