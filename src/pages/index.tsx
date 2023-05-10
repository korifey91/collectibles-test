import Head from 'next/head';
import { useState } from 'react';
import { useMount } from 'react-use';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeList as List } from 'react-window';

import Header from '@components/Header';
import { PageContent } from '@components/PageWrapper';
import CardsSearchInput from '@features/search/components/CardsSearchInput';
import Filter from '@features/search/components/Filter';
import SearchContainer from '@features/search/components/SearchContainer';
import SuiteSection from '@features/search/components/SuiteSection';
import { search } from '@features/search/search.actions';
import { useAppDispatch, useAppSelector } from '@src/hooks';

const TITLE_HEIGHT = 36;
const CARD_HEIGHT = 152;
const SUITE_BOTTOM_MARGIN = 22;
const BORDER_HEIGHT = 1;

export default function Home() {
  const dispatch = useAppDispatch();
  const suites = useAppSelector((state) => state.search.suites);

  const [tab, setTab] = useState(0);

  const getItemSize = (index: number) => TITLE_HEIGHT
    + suites[index].seo_suites.length * CARD_HEIGHT
    + SUITE_BOTTOM_MARGIN
    + (suites[index].seo_suites.length - 1) * BORDER_HEIGHT;

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
        <Filter value={tab} onChange={setTab} selectedCount={0} />
        <AutoSizer>
          {({ height, width }) => (
            <List height={height!} width={width!} itemCount={suites.length} itemSize={getItemSize}>
              {SuiteSection}
            </List>
          )}
        </AutoSizer>
      </SearchContainer>
    </PageContent>
  );
}
