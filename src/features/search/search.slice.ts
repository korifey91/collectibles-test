import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getSearchQuery } from './search.helpers';
import { GetSuitesSuccessPayload, SearchSliceState, SelectedCard } from './search.types';

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
      { payload }: PayloadAction<GetSuitesSuccessPayload>,
    ) => {
      state.suites = payload.suites.map((suite, suiteIndex) => ({
        ...suite,
        seo_suites: suite.seo_suites.map((card, cardIndex) => ({
          ...card,
          path: [suiteIndex, cardIndex],
        })),
      }));
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
    changeActiveTab: (state, action: PayloadAction<SearchSliceState['activeTab']>) => {
      state.activeTab = action.payload;
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
  changeActiveTab,
} = searchSlice.actions;
