import React, { useContext } from 'react';
import CartContext from '../context/cart';
import FullPageLayout from '../layouts/FullPageLayout';
import Button from '../components/Button';

const ConfirmationPage = () => {
  // clear cartItems in state and local storage
  const { cartItems } = useContext(CartContext);

  const renderedCartItems = cartItems.map((item) => (
    <div>
      <p>{item.name}</p>
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
        {/* <Button border>Download PDF</Button> */}
      </div>

      <div>{renderedCartItems}</div>
    </FullPageLayout>
  );
};

export default ConfirmationPage;
