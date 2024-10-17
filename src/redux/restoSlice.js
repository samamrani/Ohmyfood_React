import { createSlice } from '@reduxjs/toolkit';

const restoSlice = createSlice({
  name: 'resto',
  initialState: {
  restaurants:[],
  },
  reducers: {
   listeResto:(state, action) => {
    state.restaurants.push(action.payload);
   }
   
  },
});

export const { listeResto } = restoSlice.actions;

export default restoSlice.reducer;
