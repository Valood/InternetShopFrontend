import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userSlice from './Reducers/userReducer'
import productSlice from './Reducers/productReducer';
import cartSlice from './Reducers/cartSlice';

const rootReducer = combineReducers({
    userSlice,
    productSlice,
    cartSlice
})

export const setupStore = () => configureStore({
    reducer: rootReducer
})
