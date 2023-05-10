import { useCallback } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeList as List } from 'react-window';

import SuiteSection from '@features/search/components/SuiteSection';
import { useAppSelector } from '@src/hooks';

const TITLE_HEIGHT = 36;
const CARD_HEIGHT = 152;
const SUITE_BOTTOM_MARGIN = 22;
const BORDER_HEIGHT = 1;

function CardsList() {
  const suites = useAppSelector((state) => state.search.suites);

  const getItemSize = useCallback((index: number) => TITLE_HEIGHT
    + suites[index].seo_suites.length * CARD_HEIGHT
    + SUITE_BOTTOM_MARGIN
    + (suites[index].seo_suites.length - 1) * BORDER_HEIGHT, [suites]);

  return (
    <AutoSizer>
      {({ height, width }) => (
        <List height={height!} width={width!} itemCount={suites.length} itemSize={getItemSize}>
          {SuiteSection}
        </List>
      )}
    </AutoSizer>
  );
}

export default CardsList;
