import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPatterns } from '../store/patterns';
import { Link } from 'react-router-dom';
import { convertCents } from '../helpers';
import FullPageLayout from '../layouts/FullPageLayout';
import Button from '../components/Button';

const PatternsPage = () => {
  const patterns = useSelector((state) => state.patterns);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPatterns());
  }, []);

  return (
    <FullPageLayout>
      <h1 className="text-orange-300 text-center mb-16">All Patterns</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
        {patterns.map((pattern) => (
          <Link key={pattern.id} to={`/shop/${pattern.id}`}>
            <div>
              <img
                className="object-cover w-full aspect-square rounded-2xl mb-4"
                src={pattern.image}
              />
              <div className="text-center">
                <div className="mb-2">
                  <h3>{pattern.name}</h3>
                  <p>{pattern.creator}</p>
                  <p>
                    {pattern.price !== 0 ? convertCents(pattern.price) : 'Free'}
                  </p>
                </div>
                <Button
                  backgroundColor="bg-yellow-200"
                  textColor="text-orange-200"
                  border="2"
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </FullPageLayout>
  );
};

export default PatternsPage;
