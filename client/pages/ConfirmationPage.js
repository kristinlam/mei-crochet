import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FullPageLayout from '../layouts/FullPageLayout';

const ConfirmationPage = ({ location }) => {
  const currentOrder = useSelector((state) => state.singleOrder);
  const cartItems = location.state?.cartItems; // received from checkout page, persists on refresh

  return (
    <FullPageLayout>
      {/* check that visitor was directed from /checkout page and did not refresh page  */}
      {currentOrder.id ? (
        <div>
          <h1 className="mb-6">Order #{currentOrder.id}</h1>
          <div>
            <p>Thank you for trying out Mei Crochet!</p>
            <p>
              Check out the talented artists featured on this site and support
              them by buying their patterns through the links below!
            </p>
            {cartItems.map((item) => (
              <div key={item.id}>
                <p>{item.name}</p>
                <p>{item.link}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center mt-14">
          <p className="font-serif text-3xl mb-2">Your order was not found.</p>
          <Link to="/shop">Continue shopping</Link>
        </div>
      )}
    </FullPageLayout>
  );
};

export default ConfirmationPage;
