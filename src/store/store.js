import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userSlice from './Reducers/userReducer'

const rootReducer = combineReducers({
    userSlice
})

export const setupStore = () => configureStore({
    reducer: rootReducer
})
