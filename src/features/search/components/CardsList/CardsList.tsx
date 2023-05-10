import { useRef } from 'react';
import { useUpdateEffect } from 'react-use';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeList as List } from 'react-window';

import SuiteSection from '@features/search/components/SuiteSection';
import SuiteSectionSkeleton from '@features/search/components/SuiteSectionSkeleton';
import { useSearchResults } from '@features/search/search.hooks';

const TITLE_HEIGHT = 36;
const CARD_HEIGHT = 152;
const SUITE_BOTTOM_MARGIN = 22;
const BORDER_HEIGHT = 1;

function CardsList() {
  const listRef = useRef<List>(null);

  const { data: suites, isLoading } = useSearchResults();

  const getItemSize = (index: number) => TITLE_HEIGHT
    + suites[index].seo_suites.length * CARD_HEIGHT
    + SUITE_BOTTOM_MARGIN
    + (suites[index].seo_suites.length - 1) * BORDER_HEIGHT;

  useUpdateEffect(() => {
    if (listRef.current) {
      listRef.current.resetAfterIndex(0);
    }
  }, [suites]);

  return isLoading ? <SuiteSectionSkeleton /> : (
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height!}
          width={width!}
          itemCount={suites.length}
          itemSize={getItemSize}
          ref={listRef}
        >
          {SuiteSection}
        </List>
      )}
    </AutoSizer>
  );
}

export default CardsList;
