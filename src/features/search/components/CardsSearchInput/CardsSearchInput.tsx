import React, {
  ChangeEventHandler, memo, useCallback, useDeferredValue, useState,
} from 'react';
import { useUpdateEffect } from 'react-use';

import SearchInput from '@components/SearchInput';
import { setQuery as setStoreQuery } from '@features/search/search.slice';
import { useAppDispatch } from '@src/hooks';

import {
  CardsSearchInputContainer,
} from './CardsSearchInput.styled';

function CardsSearchInput() {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState('');

  const deferredQuery = useDeferredValue(query);

  const handleSearch = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target: { value } }) => {
      setQuery(value);
    },
    [],
  );

  useUpdateEffect(() => {
    dispatch(setStoreQuery(deferredQuery));
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
