import Head from 'next/head';
import { useState } from 'react';
import { useMount } from 'react-use';

import Filter from '@features/search/components/Filter';
import { search } from '@features/search/search.actions';
import Container from '@src/components/Container';
import Header from '@src/components/Header';
import SearchInput from '@src/components/SearchInput';
import { useAppDispatch } from '@src/hooks';

export default function Home() {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState(0);

  useMount(() => {
    dispatch(search());
  });

  return (
    <>
      <Head>
        <title>Collectibles assessment app</title>
      </Head>
      <Header />
      <Container maxWidth="sm">
        <SearchInput placeholder="What do you want to find?" />
        <Filter value={value} onChange={setValue} selectedCount={0} />
      </Container>
    </>
  );
}
