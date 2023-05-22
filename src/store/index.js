import { configureStore } from '@reduxjs/toolkit';
import countReducer from './countStore/countSlice';

const store = configureStore({
  reducer: { counter: countReducer }
});

export default store;
