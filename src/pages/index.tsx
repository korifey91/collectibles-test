import Head from 'next/head';

import Header from '@src/components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Collectibles assessment app</title>
      </Head>
      <Header />
    </>
  );
}
