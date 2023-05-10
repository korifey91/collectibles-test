import { useMemo } from 'react';

import { getFoundSuiteWithCards, getIsLoading } from '@features/search/search.selectors';
import { useAppSelector } from '@src/hooks';

export function useSearchResults() {
  const suites = useAppSelector(getFoundSuiteWithCards);
  const isLoading = useAppSelector(getIsLoading);

  return useMemo(() => ({
    data: suites,
    isLoading,
  }), [isLoading, suites]);
}
