import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getSearchQuery } from '@features/search/search.helpers';

import { SearchSliceState, SelectedCard } from './search.types';

const searchSlice = createSlice({
  name: 'search',
  initialState: () => {
    const initialState = {
      isLoading: true,
      error: undefined,
      suites: [],
      totalCount: 0,
      searchQuery: '',
      selectedCards: [],
      activeTab: 'all',
    } as SearchSliceState;

    const initialQuery = getSearchQuery();

    if (initialQuery) {
      initialState.searchQuery = initialQuery;
    }

    return initialState;
  },
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
    addCardToSelected: (state, action: PayloadAction<SelectedCard>) => {
      state.selectedCards.push(action.payload);
    },
    removeCardFromSelected: (state, action: PayloadAction<number>) => {
      state.selectedCards = state.selectedCards.filter((card) => card.id !== action.payload);
    },
  },
});

export default searchSlice.reducer;
export const {
  getSuitesSuccess,
  getSuitesError,
  setQuery,
  addCardToSelected,
  removeCardFromSelected,
} = searchSlice.actions;
