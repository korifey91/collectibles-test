import React, {
  ChangeEventHandler, memo, useCallback, useDeferredValue, useState,
} from 'react';
import { useUpdateEffect } from 'react-use';

import SearchInput from '@components/SearchInput';
import { setQuery as setStoreQuery } from '@features/search/search.slice';
import { useAppDispatch } from '@src/hooks';

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
    <SearchInput
      placeholder="What do you want to find?"
      value={query}
      onChange={handleSearch}
    />
  );
}

export default memo(CardsSearchInput);
