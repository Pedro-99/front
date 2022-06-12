import { configureStore } from '@reduxjs/toolkit'; 
import { setupListeners } from '@reduxjs/toolkit/query'
import { ecomApi } from '../services/api';
import authReducer from '../features/auth/authSlice';
import productReducer from '../features/products/productSlice';
import shopping_sessionReducer from '../features/session/sessionSlice';
import cartReducer from '../features/Cart/cartSlice';
import orderReducer from '../features/order/orderSlice';
// import ratingReducer from '../features/rating/ratingSlice';

export const store = configureStore({
  reducer : {
    [ecomApi.reducerPath] : ecomApi.reducer,
    auth : authReducer,
    // products : productReducer,
    shopping : shopping_sessionReducer,
    cart : cartReducer,
    order : orderReducer,
    // rating : ratingReducer,
  },
  middleware : ( getDefaultMiddlware ) => getDefaultMiddlware().concat(ecomApi.middleware)
})

setupListeners(store.dispatch)