import { useRef } from 'react';
import { useUpdateEffect } from 'react-use';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeList as List } from 'react-window';

import Stack from '@components/Stack';
import Text from '@components/Text';
import { useIsMobile } from '@src/hooks';

import { useSearchResults } from '../../search.hooks';
import SuiteSection from '../SuiteSection';
import SuiteSectionSkeleton from '../SuiteSectionSkeleton';

const TITLE_HEIGHT = 36;
const DESKTOP_CARD_HEIGHT = 166;
const MOBILE_CARD_HEIGHT = 210;
const SUITE_BOTTOM_MARGIN = 22;
const BORDER_HEIGHT = 1;

function CardsList() {
  const isMobile = useIsMobile();

  const listRef = useRef<List>(null);

  const { data: suites, isLoading } = useSearchResults();

  const cardHeight = isMobile ? MOBILE_CARD_HEIGHT : DESKTOP_CARD_HEIGHT;

  const getItemSize = (index: number) => TITLE_HEIGHT
    + suites[index].seo_suites.length * cardHeight
    + SUITE_BOTTOM_MARGIN
    + (suites[index].seo_suites.length - 1) * BORDER_HEIGHT;

  useUpdateEffect(() => {
    if (listRef.current) {
      listRef.current.resetAfterIndex(0);
    }
  }, [suites, isMobile]);

  if (!isLoading && suites.length === 0) {
    return (
      <Stack alignItems="center">
        <Text variant="body">No results</Text>
      </Stack>
    );
  }

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
