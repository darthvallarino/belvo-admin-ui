import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: 'user',
  token: null,
};

const slice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setAuth: (state, { payload }) => payload,
    restore: () => initialState,
  },
});

export const { setAuth, restore } = slice.actions;

export default slice.reducer;
