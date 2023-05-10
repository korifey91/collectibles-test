import { createSelector } from '@reduxjs/toolkit';

import { AppState } from '@src/store';

import { Suites } from './search.types';

export const selectQuery = (state: AppState) => state.search.searchQuery;
export const selectSuites = (state: AppState) => state.search.suites;
export const selectIsLoading = (state: AppState) => state.search.isLoading;
export const selectSelectedCards = (state: AppState) => state.search.selectedCards;
export const selectActiveTab = (state: AppState) => state.search.activeTab;
export const selectSelectedCardsCount = (state: AppState) => state.search.selectedCards.length;

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

export const selectFoundSuitesWithSelectedCards = createSelector(
  selectFoundSuiteWithCards,
  selectSelectedCards,
  (suites, selectedCards) => {
    const hash: Record<number, Suites> = {};

    selectedCards.forEach((selectedCard) => {
      const [suiteIndex, cardIndex] = selectedCard.path;
      const suite = suites[suiteIndex];

      const card = suites[suiteIndex].seo_suites[cardIndex];

      if (hash[suite.year]) {
        hash[suite.year].seo_suites.push(card);
      } else {
        hash[suite.year] = {
          ...suite,
          seo_suites: [card],
        };
      }
    });

    return Object.entries(hash)
      .sort(([key1], [key2]) => Number(key2) - Number(key1))
      .map(([, suite]) => suite);
  },
);

export const selectFilteredSuites = createSelector(
  selectFoundSuiteWithCards,
  selectFoundSuitesWithSelectedCards,
  selectActiveTab,
  (
    foundSuites,
    selectedFoundSuites,
    activeTab,
  ) => (activeTab === 'all' ? foundSuites : selectedFoundSuites),
);

export const selectIfCardSelected = createSelector(
  selectSelectedCards,
  (state: AppState, id: number) => id,
  (selectedCards, id) => selectedCards.some((card) => card.id === id),
);
