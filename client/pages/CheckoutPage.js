import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/confirmation">
          <Button border>Place your order</Button>
        </Link>
      </div>
    </FullPageLayout>
  );
};

export default CheckoutPage;
