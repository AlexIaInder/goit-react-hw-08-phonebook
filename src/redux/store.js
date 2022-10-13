import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from '../api';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    api.middleware,
  ],
});

setupListeners(store.dispatch);
