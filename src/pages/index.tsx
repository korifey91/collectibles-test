import Head from 'next/head';
import { useState } from 'react';

import Filter from '@features/search/components/Filter';
import Container from '@src/components/Container';
import Header from '@src/components/Header';
import SearchInput from '@src/components/SearchInput';

export default function Home() {
  const [value, setValue] = useState(0);

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
