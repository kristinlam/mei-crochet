import React from 'react';
import { useSelector } from 'react-redux';
import FullPageLayout from '../layouts/FullPageLayout';

const ConfirmationPage = (props) => {
  const { cartItems } = props.location.state;
  const currentOrder = useSelector((state) => state.singleOrder);

  const renderedCartItems = cartItems.map((item) => (
    <div key={item.id}>
      <p>{item.name}</p>
      <p>{item.link}</p>
    </div>
  ));

  return (
    <FullPageLayout>
      <h1 className="mb-6">Order #{currentOrder.id}</h1>
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
