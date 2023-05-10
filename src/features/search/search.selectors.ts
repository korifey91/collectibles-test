import { createSelector } from '@reduxjs/toolkit';

import { AppState } from '@src/store';

import { Suites } from './search.types';

export const selectQuery = (state: AppState) => state.search.searchQuery;
export const selectSuites = (state: AppState) => state.search.suites;
export const selectIsLoading = (state: AppState) => state.search.isLoading;
export const selectSelectedCards = (state: AppState) => state.search.selectedCards;

export const selectFoundSuiteWithCards = createSelector(
  selectQuery,
  selectSuites,
  (query, suites) => {
    if (!query.length) return suites;

    const result: Suites[] = [];

    suites.forEach((suite) => {
      const found = suite.seo_suites.filter(
        (card) => card.name.toLowerCase().includes(query.toLowerCase()),
      );
      if (found.length) {
        result.push({
          ...suite,
          seo_suites: found,
        });
      }
    });

    return result;
  },
);

export const selectIfCardSelected = createSelector(
  selectSelectedCards,
  (state: AppState, id: number) => id,
  (selectedCards, id) => selectedCards.some((card) => card.id === id),
);
