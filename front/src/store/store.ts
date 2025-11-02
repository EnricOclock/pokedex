// store.js
import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './api/pokemonApi';
import { teamApi } from './api/teamApi';

export const store = configureStore({
  reducer: {
    // Ajout du reducer RTK Query
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [teamApi.reducerPath]: teamApi.reducer,
  },
  // Ajout du middleware RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
  .concat(pokemonApi.middleware)
  .concat(teamApi.middleware),
    
});