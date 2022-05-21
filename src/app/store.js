import { configureStore } from '@reduxjs/toolkit'; 
import { setupListeners } from '@reduxjs/toolkit/query'
import { ecomApi } from '../services/api';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer : {
    [ecomApi.reducerPath] : ecomApi.reducer,
    auth : authReducer
  },
  middleware : ( getDefaultMiddlware ) => getDefaultMiddlware().concat(ecomApi.middleware)
})

setupListeners(store.dispatch)