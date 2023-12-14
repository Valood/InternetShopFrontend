import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userSlice from './Reducers/userReducer'
import productSlice from './Reducers/productReducer';
import cartSlice from './Reducers/cartSlice';
import historySlice from './Reducers/historySlice';

const rootReducer = combineReducers({
    userSlice,
    productSlice,
    cartSlice,
    historySlice
})

export const setupStore = () => configureStore({
    reducer: rootReducer
})
