import React, { useEffect, useContext } from 'react';
import CartContext from '../context/cart';
import FullPageLayout from '../layouts/FullPageLayout';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { convertCents } from '../helpers';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  console.log('cartitems', cartItems);

  const renderedCartItems = cartItems.map((item) => (
    <div key={item.id} className="flex border-b-2 border-orange py-8">
      <div>
        <Link to={`/shop/${item.id}`}>
          <div className="flex items-center">
            <div className="max-w-[120px] mr-6">
              <img
                className="w-full	aspect-square object-cover rounded-xl"
                src={item.image}
              />
            </div>
            <p className="font-serif font-bold text-2xl">{item.name}</p>
          </div>
        </Link>
      </div>
      <div>
        <p>{convertCents(item.price)}</p>
      </div>
      <AiOutlineCloseCircle className="text-3xl" />
    </div>
  ));

  return (
    <FullPageLayout cartPage>
      <h1 className="text-orange text-center mb-16">Your Cart</h1>

      <div className="border-b-4 border-orange mb-6">{renderedCartItems}</div>

      <div className="flex flex-col items-end">
        <div className="mb-2">
          <p className="text-2xl">Total: Placeholder</p>
        </div>
        <Button border>Checkout</Button>
      </div>
    </FullPageLayout>
  );
};

export default CartPage;
