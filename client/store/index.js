import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import auth from './auth';
import users from './users';
import patterns from './patterns';
import singlePattern from './singlePattern';
import orders from './orders';
import singleOrder from './singleOrder';

// configureStore auto calls combineReducers
const reducer = {
  auth,
  users,
  patterns,
  singlePattern,
  orders,
  singleOrder,
};

// getDefaultMiddleware auto includes redux-thunk
// configureStore auto enables DevTools
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createLogger({ collapsed: true })),
});

export default store;
export * from './auth';
