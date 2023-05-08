import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Suites } from './search.types';

interface SearchSliceState {
  isLoading: boolean;
  error: string | undefined;
  suites: Suites[]
}

const initialState = {
  isLoading: true,
  error: undefined,
  suites: [],
} as SearchSliceState;

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getSuitesSuccess: (state, { payload }: PayloadAction<Suites[]>) => {
      state.suites = payload;
      state.isLoading = false;
      state.error = undefined;
    },
    getSuitesError: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default searchSlice.reducer;
export const {
  getSuitesSuccess,
  getSuitesError,
} = searchSlice.actions;
