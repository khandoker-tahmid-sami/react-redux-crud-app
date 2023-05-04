import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userFeatures/userSlice';

export const store = configureStore({
    reducer: {
        users: userReducer
    }
})