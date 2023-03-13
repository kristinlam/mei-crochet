import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // get items from local storage on load
  useEffect(() => {
    const localStorageCartItems = localStorage.getItem('cartItems');
    if (localStorageCartItems) setCartItems(JSON.parse(localStorageCartItems));
  }, []);

  // update local storage whenever state changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // cart methods
  const addItem = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItem = (item) => {
    const updatedItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedItems);
  };

  const cartContextValues = {
    cartItems,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContextValues}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
export default CartContext;
