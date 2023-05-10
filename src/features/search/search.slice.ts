import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Suites } from './search.types';

interface SearchSliceState {
  isLoading: boolean;
  error: string | undefined;
  suites: Suites[];
  totalCount: number;
  searchQuery: string;
}

const initialState = {
  isLoading: true,
  error: undefined,
  suites: [],
  totalCount: 0,
  searchQuery: '',
} as SearchSliceState;

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getSuitesSuccess: (
      state,
      { payload }: PayloadAction<Pick<SearchSliceState, 'suites' | 'totalCount'>>,
    ) => {
      state.suites = payload.suites;
      state.totalCount = payload.totalCount;
      state.isLoading = false;
      state.error = undefined;
    },
    getSuitesError: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const {
  getSuitesSuccess,
  getSuitesError,
  setQuery,
} = searchSlice.actions;
