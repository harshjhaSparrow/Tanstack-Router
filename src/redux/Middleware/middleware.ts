// src/redux/loggerMiddleware.ts
import { Middleware } from '@reduxjs/toolkit';

const loggerMiddleware: Middleware = store => next => action => {
  // Log the action and the state before the action is processed
  console.log('dispatching', action);
  console.log('prev state', store.getState());

  // Call the next middleware or reducer
  const result = next(action);

  // Log the state after the action has been processed
  console.log('next state', store.getState());

  return result;
};

export default loggerMiddleware;
