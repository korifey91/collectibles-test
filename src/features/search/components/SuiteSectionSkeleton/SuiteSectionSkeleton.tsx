import { memo } from 'react';

import Skeleton from '@components/Skeleton';
import Stack from '@components/Stack';

import CardItemSkeleton from '../CardItemSkeleton';

function SuiteSectionSkeleton() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rounded" width={66} height={36} />
      <CardItemSkeleton />
      <CardItemSkeleton />
      <CardItemSkeleton />
    </Stack>
  );
}

export default memo(SuiteSectionSkeleton);
