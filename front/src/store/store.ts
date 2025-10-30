// store.js
import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './api/pokemonApi';

export const store = configureStore({
  reducer: {
    // Ajout du reducer RTK Query
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  // Ajout du middleware RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});