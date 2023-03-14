import React, { useContext } from 'react';
import FullPageLayout from '../layouts/FullPageLayout';
import Button from '../components/Button';

const CheckoutPage = () => {
  return (
    <FullPageLayout>
      <h1 className="text-orange">Checkout</h1>
      <div>
        <div>
          <p>Order summary here.</p>
        </div>
        <Button border>Place your order</Button>
      </div>
    </FullPageLayout>
  );
};

export default CheckoutPage;
