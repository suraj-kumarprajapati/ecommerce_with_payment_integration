

import {configureStore} from '@reduxjs/toolkit';
import { productApi } from './api/productApi.js';
import { authApi } from './api/authApi.js';
import { userApi } from './api/userApi.js';
import userSliceReducer  from './features/userSlice.js'
import cartSliceReducer from './features/cartSlice.js';
import { orderApi } from './api/orderApi.js';



export const store = configureStore({
    reducer:  {
        auth : userSliceReducer,
        cart : cartSliceReducer,
        [productApi.reducerPath] : productApi.reducer,
        [authApi.reducerPath] : authApi.reducer,
        [userApi.reducerPath] : userApi.reducer,
        [orderApi.reducerPath] : orderApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        productApi.middleware, 
        authApi.middleware,
        userApi.middleware,
        orderApi.middleware
    ]),
}); 


