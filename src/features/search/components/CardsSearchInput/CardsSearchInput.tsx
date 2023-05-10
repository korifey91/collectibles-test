import React, { ChangeEventHandler, useCallback } from 'react';

import SearchInput from '@components/SearchInput';
import { setQuery } from '@features/search/search.slice';
import { useAppDispatch, useAppSelector } from '@src/hooks';

function CardsSearchInput() {
  const dispatch = useAppDispatch();

  const query = useAppSelector((state) => state.search.searchQuery);

  const handleSearch = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target: { value } }) => {
      dispatch(setQuery(value));
    },
    [dispatch],
  );

  return (
    <SearchInput
      placeholder="What do you want to find?"
      value={query}
      onChange={handleSearch}
    />
  );
}

export default CardsSearchInput;
