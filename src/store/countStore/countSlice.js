import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  count: '',
  letter: ''
};

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    updateCount: (state, action) => {
      console.log('da', action.payload);
      state.count = action.payload.count;
      state.letter = action.payload.letter;
    }
  }
});

export const { updateCount } = countSlice.actions;
export default countSlice.reducer;
export const selectCountAndLetter = (state) => {
  return { count: state?.counter.count, letter: state?.counter.letter };
};
