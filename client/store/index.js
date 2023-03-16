import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import auth from './auth';
import patterns from './patterns';
import singlePattern from './singlePattern';
import users from './users';
import singleOrder from './singleOrder';

// configureStore auto calls combineReducers
const reducer = {
  auth,
  patterns,
  singlePattern,
  users,
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
