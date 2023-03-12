import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSinglePattern } from '../store/singlePattern';
import { convertCents } from '../helpers';

const SinglePatternPage = (props) => {
  const pattern = useSelector((state) => state.singlePattern);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSinglePattern(props.match.params.id));
  }, []);

  return (
    <div className="max-w-screen-2xl flex px-4 md:px-8">
      <img src={pattern.image} />
      <div>
        <h1>{pattern.name}</h1>
        <p>{pattern.price !== 0 ? convertCents(pattern.price) : 'Free'}</p>
        <p>{pattern.creator}</p>
        <p>{pattern.description}</p>
      </div>
    </div>
  );
};

export default SinglePatternPage;
