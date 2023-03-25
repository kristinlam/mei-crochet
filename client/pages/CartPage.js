import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { createOrder } from '../store/singleOrder';
import CartContext from '../context/cart';
import { convertCents } from '../helpers';
import FullPageLayout from '../layouts/FullPageLayout';
import CartItem from '../components/CartItem';
import Button from '../components/Button';

const CartPage = () => {
  const { cartItems, calculatePrice, clearCart } = useContext(CartContext);
  const history = useHistory();
  const dispatch = useDispatch();
  const totalPrice = calculatePrice();

  const handleCheckout = () => {
    dispatch(createOrder(cartItems, totalPrice));
    history.push({
      pathname: '/confirmation',
      state: { cartItems },
    });
    clearCart();
  };

  const checkoutInfo = (
    <div className="flex flex-col items-end">
      <div className="mb-2">
        <p className="text-2xl">
          Total: {'Calculating...' && convertCents(totalPrice)}
        </p>
      </div>
      <Button onClick={handleCheckout} border>
        Checkout
      </Button>
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
      <h1 className="text-center mb-6">Your Cart</h1>
      {displayCartOrMsg}
    </FullPageLayout>
  );
};

export default CartPage;
