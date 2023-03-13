import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './history';
import store from './store';
import { CartProvider } from './context/cart';
import App from './App';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <CartProvider>
      <Router history={history}>
        <App />
      </Router>
    </CartProvider>
  </Provider>
);
