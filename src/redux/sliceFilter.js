import { createSlice } from '@reduxjs/toolkit';

export const sliceFilter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
    filter(state, action) {},
  },
});

export const { setFilter, filter } = sliceFilter.actions;