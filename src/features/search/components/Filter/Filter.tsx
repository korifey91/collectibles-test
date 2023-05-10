import { Divider } from '@mui/material';
import { memo } from 'react';

import Chip from '@components/Chip';
import Stack from '@components/Stack';
import Text from '@components/Text';
import { selectActiveTab, selectSelectedCardsCount } from '@features/search/search.selectors';
import { changeActiveTab } from '@features/search/search.slice';
import { useAppDispatch, useAppSelector } from '@src/hooks';

import { FilterItem } from './Filter.styled';

function Filter() {
  const dispatch = useAppDispatch();

  const activeTab = useAppSelector(selectActiveTab);
  const selectedCount = useAppSelector(selectSelectedCardsCount);

  const handleTabChange = (tab: 'all' | 'completed') => {
    dispatch(changeActiveTab(tab));
  };

  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      mb="10px"
      justifyContent="center"
    >
      <FilterItem onClick={() => handleTabChange('all')}>
        <Text variant={activeTab === 'all' ? 'bodySemiBold' : 'body'}>All</Text>
      </FilterItem>
      <FilterItem onClick={() => handleTabChange('completed')}>
        <Stack direction="row" spacing="5px">
          <Text variant={activeTab === 'completed' ? 'bodySemiBold' : 'body'}>Selected</Text>
          <Chip label={selectedCount} size="small" />
        </Stack>
      </FilterItem>
    </Stack>
  );
}

export default memo(Filter);
