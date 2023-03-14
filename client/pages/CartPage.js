import React, { useEffect, useContext } from 'react';
import CartContext from '../context/cart';
import FullPageLayout from '../layouts/FullPageLayout';
import CartItem from '../components/CartItem';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, calculatePrice } = useContext(CartContext);

  const checkoutInfo = (
    <div className="flex flex-col items-end">
      <div className="mb-2">
        <p className="text-2xl">Total: {calculatePrice()}</p>
      </div>
      <Button border>Checkout</Button>
    </div>
  );

  const displayCartOrMsg =
    cartItems.length > 0 ? (
      <div>
        <div className="border-b-4 border-green mb-6">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        {checkoutInfo}
      </div>
    ) : (
      <div className="text-center mt-14">
        <p className="font-serif text-3xl mb-2">
          There are no items in your cart.
        </p>
        <Link to="/shop">Continue shopping</Link>
      </div>
    );

  return (
    <FullPageLayout cartPage>
      <h1 className="text-orange text-center mb-6">Your Cart</h1>
      {displayCartOrMsg}
    </FullPageLayout>
  );
};

export default CartPage;
