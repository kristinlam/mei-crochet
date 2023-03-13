import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPatterns } from '../store/patterns';
import { Link } from 'react-router-dom';
import CartContext from '../context/cart';
import { convertCents } from '../helpers';
import FullPageLayout from '../layouts/FullPageLayout';
import Button from '../components/Button';

const PatternsPage = () => {
  const { cartItems, addItem } = useContext(CartContext);
  const patterns = useSelector((state) => state.patterns);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPatterns());
  }, []);

  const handleAddToCartClick = (pattern) => {
    addItem(pattern);
  };

  return (
    <FullPageLayout>
      <h1 className="text-orange text-center mb-16">All Patterns</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
        {patterns.map((pattern) => (
          <div key={pattern.id} className="text-center">
            <Link key={pattern.id} to={`/shop/${pattern.id}`}>
              <img
                className="object-cover w-full aspect-square rounded-2xl mb-4"
                src={pattern.image}
              />

              <div className="mb-2">
                <h3>{pattern.name}</h3>
                <p>{pattern.creator}</p>
                <p>
                  {pattern.price !== 0 ? convertCents(pattern.price) : 'Free'}
                </p>
              </div>
            </Link>
            <Button
              backgroundColor="bg-yellow"
              textColor="text-orange"
              border
              onClick={() => handleAddToCartClick(pattern)}
            >
              Add to cart
            </Button>
          </div>
        ))}
      </div>
    </FullPageLayout>
  );
};

export default PatternsPage;
