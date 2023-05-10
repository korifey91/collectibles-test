import Head from 'next/head';
import { useMount } from 'react-use';

import Header from '@components/Header';
import { PageContent } from '@components/PageWrapper';
import {
  CardsList,
  Filter,
  SearchContainer,
  CardsSearchInput,
  searchAction,
} from '@features/search';
import { useAppDispatch } from '@src/hooks';

export default function Home() {
  const dispatch = useAppDispatch();

  useMount(() => {
    dispatch(searchAction());
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
