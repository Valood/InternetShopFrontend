import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userSlice from './Reducers/userReducer'
import productSlice from './Reducers/productReducer';

const rootReducer = combineReducers({
    userSlice,
    productSlice
})

export const setupStore = () => configureStore({
    reducer: rootReducer
})
