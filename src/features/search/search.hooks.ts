import { useMemo } from 'react';

import {
  selectFilteredSuites,
  selectIsLoading,
} from '@features/search/search.selectors';
import { useAppSelector } from '@src/hooks';

export function useSearchResults() {
  const suites = useAppSelector(selectFilteredSuites);
  const isLoading = useAppSelector(selectIsLoading);

  return useMemo(() => ({
    data: suites,
    isLoading,
  }), [isLoading, suites]);
}
