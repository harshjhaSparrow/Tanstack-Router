// src/redux/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import exampleReducer from './slices/exampleSlice';
import anotherReducer from './slices/anotherSlice';

// Combine the reducers into a root reducer
const rootReducer = combineReducers({
  example: exampleReducer,
  another: anotherReducer,
});

export default rootReducer;
