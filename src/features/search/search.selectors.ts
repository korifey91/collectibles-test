import { createSelector } from '@reduxjs/toolkit';

import { AppState } from '@src/store';

import { Suites } from './search.types';

export const getQuery = (state: AppState) => state.search.searchQuery;
export const getSuites = (state: AppState) => state.search.suites;

export const getFoundSuiteWithCards = createSelector(
  getQuery,
  getSuites,
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
