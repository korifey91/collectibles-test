import Head from 'next/head';
import { useMount } from 'react-use';

import Header from '@components/Header';
import { PageContent } from '@components/PageWrapper';
import CardsList from '@features/search/components/CardsList';
import CardsSearchInput from '@features/search/components/CardsSearchInput';
import Filter from '@features/search/components/Filter';
import SearchContainer from '@features/search/components/SearchContainer';
import { search } from '@features/search/search.actions';
import { useAppDispatch } from '@src/hooks';

export default function Home() {
  const dispatch = useAppDispatch();

  useMount(() => {
    dispatch(search());
  });

  return (
    <PageContent>
      <Head>
        <title>Collectibles assessment app</title>
      </Head>
      <Header />
      <SearchContainer maxWidth="sm">
        <CardsSearchInput />
        <Filter />
        <CardsList />
      </SearchContainer>
    </PageContent>
  );
}
