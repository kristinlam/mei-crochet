import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSinglePattern } from '../store/singlePattern';
import CartContext from '../context/cart';
import { convertCents } from '../helpers';
import FullPageLayout from '../layouts/FullPageLayout';
import Button from '../components/Button';

const SinglePatternPage = (props) => {
  const { addItem } = useContext(CartContext);
  const pattern = useSelector((state) => state.singlePattern);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSinglePattern(props.match.params.id));
  }, []);

  const handleAddToCartClick = (item) => {
    addItem(item);
  };

  return (
    <FullPageLayout productPage>
      <div className="lg:flex-1">
        <img
          className="w-full aspect-square object-cover rounded-2xl"
          src={pattern.image}
        />
      </div>

      <div className="lg:flex-1 lg:px-12 mt-10">
        <div className="flex items-start mb-2">
          <div className="flex-grow pr-8 sm:pr-12 lg:pr-10">
            <h1 className="text-4xl leading-snug font-bold font-serif">
              {pattern.name}
            </h1>
          </div>
          <div>
            <p className="text-4xl text-orange leading-snug font-bold font-serif">
              {convertCents(pattern.price)}
            </p>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-2xl text-green font-bold">{pattern.creator}</p>
        </div>

        <div className="mb-10">
          <p className="text-lg">{pattern.description}</p>
        </div>

        <Button
          className="w-full sm:w-2/5"
          border
          onClick={() => handleAddToCartClick(pattern)}
        >
          Add to cart
        </Button>
      </div>
    </FullPageLayout>
  );
};

export default SinglePatternPage;
