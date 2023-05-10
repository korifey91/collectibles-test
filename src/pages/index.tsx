import Head from 'next/head';
import { ChangeEventHandler, useCallback, useState } from 'react';
import { useMount } from 'react-use';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeList as List } from 'react-window';

import Filter from '@features/search/components/Filter';
import SearchContainer from '@features/search/components/SearchContainer';
import SuiteSection from '@features/search/components/SuiteSection';
import { search } from '@features/search/search.actions';
import Header from '@src/components/Header';
import { PageContent } from '@src/components/PageWrapper';
import SearchInput from '@src/components/SearchInput';
import { useAppDispatch, useAppSelector } from '@src/hooks';

const TITLE_HEIGHT = 36;
const CARD_HEIGHT = 152;
const SUITE_BOTTOM_MARGIN = 22;
const BORDER_HEIGHT = 1;

export default function Home() {
  const dispatch = useAppDispatch();
  const suites = useAppSelector((state) => state.search.suites);

  const [tab, setTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const getItemSize = (index: number) => TITLE_HEIGHT
    + suites[index].seo_suites.length * CARD_HEIGHT
    + SUITE_BOTTOM_MARGIN
    + (suites[index].seo_suites.length - 1) * BORDER_HEIGHT;

  const handleSearch = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target: { value } }) => {
      setSearchQuery(value);
    },
    [],
  );

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
        <SearchInput
          placeholder="What do you want to find?"
          value={searchQuery}
          onChange={handleSearch}
        />
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
