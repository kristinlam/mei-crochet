import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPatterns } from '../store/patterns';

const AllPatterns = () => {
  const patterns = useSelector((state) => state.patterns);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPatterns());
  }, [dispatch]);

  return (
    <div>
      <h1>All Patterns</h1>
      <div>
        {patterns.map((pattern) => (
          <div>
            <h2>{pattern.name}</h2>
            <div style={{ width: '20rem', height: '20rem' }}>
              <img
                src={pattern.image}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <p>{pattern.creator}</p>
            <p>{pattern.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPatterns;
