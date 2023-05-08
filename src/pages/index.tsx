import Head from 'next/head';

import Header from '@src/components/Header';
import SearchInput from '@src/components/SearchInput';

export default function Home() {
  return (
    <>
      <Head>
        <title>Collectibles assessment app</title>
      </Head>
      <Header />
      <SearchInput placeholder="What do you want to find?" />
    </>
  );
}
