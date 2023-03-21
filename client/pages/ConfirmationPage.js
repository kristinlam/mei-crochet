import React, { useEffect, useContext } from 'react';
import CartContext from '../context/cart';
import { useDispatch } from 'react-redux';
import { createOrder } from '../store/singleOrder';
import FullPageLayout from '../layouts/FullPageLayout';

const ConfirmationPage = (props) => {
  const { cartItems, totalPrice } = props.location.state;
  const dispatch = useDispatch();

  const { setCartItems } = useContext(CartContext);

  useEffect(() => {
    dispatch(createOrder(cartItems, totalPrice));

    // update state, auto clears local storage
    setCartItems([]);
  }, []);

  const renderedCartItems = cartItems.map((item) => (
    <div key={item.id}>
      <p>{item.name}</p>
      <p>{item.link}</p>
    </div>
  ));

  return (
    <FullPageLayout>
      <h1 className="mb-6">Order Confirmation</h1>
      <div>
        <p>Thank you for trying out Mei Crochet!</p>
        <p>
          Check out the talented artists featured on this site and support them
          by buying their patterns through the links below!
        </p>
        {renderedCartItems}
      </div>
    </FullPageLayout>
  );
};

export default ConfirmationPage;
