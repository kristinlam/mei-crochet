import React, { createContext, useState, useEffect } from 'react';
import { convertCents } from '../helpers';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemQty, setCartItemQty] = useState(0);

  // get items from local storage on load
  useEffect(() => {
    const localStorageCartItems = localStorage.getItem('cartItems');
    if (localStorageCartItems) setCartItems(JSON.parse(localStorageCartItems));
  }, []);

  // update local storage whenever state changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setCartItemQty(cartItems.length);
  }, [cartItems]);

  // cart methods
  const addItem = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (!existingItem) setCartItems([...cartItems, item]);
  };

  const removeItem = (item) => {
    const updatedItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedItems);
  };

  const calculatePrice = () => {
    const totalCents = cartItems.reduce(
      (totalPrice, item) => totalPrice + item.price,
      0
    );
    return convertCents(totalCents);
  };

  const cartContextValues = {
    cartItems,
    cartItemQty,
    addItem,
    removeItem,
    calculatePrice,
  };

  return (
    <CartContext.Provider value={cartContextValues}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
export default CartContext;
