import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPatterns } from '../store/patterns';
import { Link } from 'react-router-dom';

function convertCents(cents) {
  let dollars = cents / 100;
  return dollars.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

const AllPatterns = () => {
  const patterns = useSelector((state) => state.patterns);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPatterns());
  }, []);

  return (
    <div className="bg-yellow">
      <div className="py-10 px-6">
        <h1 className="text-orange-300 text-center mb-16">All Patterns</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {patterns.map((pattern) => (
            <Link key={pattern.id} to={`/shop/${pattern.id}`}>
              <div>
                <img
                  src={pattern.image}
                  className="object-cover w-full aspect-square rounded-2xl"
                />
                <div className="text-center">
                  <h3>{pattern.name}</h3>
                  <p>{pattern.creator}</p>
                  <p>
                    {pattern.price !== 0 ? convertCents(pattern.price) : 'Free'}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPatterns;
