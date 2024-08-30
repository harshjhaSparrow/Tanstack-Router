// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import loggerMiddleware from './Middleware/middleware';
import rootReducer from './rootreducers';

// Define RootState type
export type RootState = ReturnType<typeof rootReducer>;

// Persist config
const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  version: 1,
  storage,
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with custom middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware), // Add custom middleware
});

// Create persistor
export const persistor = persistStore(store);

// Define AppDispatch type
export type AppDispatch = typeof store.dispatch;
