import { useMemo } from 'react';

import { useAppSelector } from '@src/hooks';

import {
  selectFilteredSuites,
  selectIsLoading,
} from './search.selectors';

export function useSearchResults() {
  const suites = useAppSelector(selectFilteredSuites);
  const isLoading = useAppSelector(selectIsLoading);

  return useMemo(() => ({
    data: suites,
    isLoading,
  }), [isLoading, suites]);
}
