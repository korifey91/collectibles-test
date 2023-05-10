import { useRouter } from 'next/router';
import React, {
  ChangeEventHandler, memo, useCallback, useDeferredValue, useState,
} from 'react';
import { useUpdateEffect } from 'react-use';

import SearchInput from '@components/SearchInput';
import { getQuery } from '@features/search/search.selectors';
import { setQuery as setStoreQuery } from '@features/search/search.slice';
import { useAppDispatch, useAppSelector } from '@src/hooks';

import {
  CardsSearchInputContainer,
} from './CardsSearchInput.styled';

function CardsSearchInput() {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const initialQuery = useAppSelector(getQuery);

  const [query, setQuery] = useState(initialQuery);

  const deferredQuery = useDeferredValue(query);

  const handleSearch = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target: { value } }) => {
      setQuery(value);
    },
    [],
  );

  useUpdateEffect(() => {
    const trimmedQuery = deferredQuery.trim();
    dispatch(setStoreQuery(trimmedQuery));

    const searchParams = new URLSearchParams('');
    searchParams.set('query', trimmedQuery);

    const urlToReplace = trimmedQuery
      ? `${window.location.pathname}?${searchParams}`
      : window.location.pathname;

    router.replace(
      urlToReplace,
      undefined,
      { shallow: true },
    );
  }, [deferredQuery]);

  return (
    <CardsSearchInputContainer>
      <SearchInput
        placeholder="What do you want to find?"
        value={query}
        onChange={handleSearch}
      />
    </CardsSearchInputContainer>
  );
}

export default memo(CardsSearchInput);
