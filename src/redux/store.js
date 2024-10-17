import { configureStore } from '@reduxjs/toolkit';
import restoReducer from './restoSlice';

const store = configureStore({
  reducer: {  
    resto: restoReducer, 
  },
});

export default store;