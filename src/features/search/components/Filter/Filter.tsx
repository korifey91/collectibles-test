import { Divider } from '@mui/material';

import Chip from '@components/Chip';
import Stack from '@components/Stack';
import Text from '@components/Text';

import { FilterItem } from './Filter.styled';

interface FilterProps {
  value: number;
  onChange(value: number): void;
  selectedCount: number;
}

function Filter({ value, onChange, selectedCount }: FilterProps) {
  return (
    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} justifyContent="center">
      <FilterItem onClick={() => onChange(0)}>
        <Text variant={value === 0 ? 'bodySemiBold' : 'body'}>All</Text>
      </FilterItem>
      <FilterItem onClick={() => onChange(1)}>
        <Stack direction="row" spacing="5px">
          <Text variant={value === 1 ? 'bodySemiBold' : 'body'}>Selected</Text>
          <Chip label={selectedCount} size="small" />
        </Stack>
      </FilterItem>
    </Stack>
  );
}

export default Filter;
