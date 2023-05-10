import { memo } from 'react';

import Skeleton from '@components/Skeleton';
import Stack from '@components/Stack';

function CardItemSkeleton() {
  return (
    <Stack direction="row" padding="24px 24px 24px 15px" spacing="6px" maxHeight={152}>
      <Skeleton variant="rectangular" width={118} height={118} />
      <Stack justifyContent="space-between" flexGrow={1}>
        <Skeleton variant="rounded" width="80%" height={28} />

        <Skeleton variant="rounded" width={87} height={36} />
      </Stack>
      <Stack>
        <Skeleton variant="circular" width={36} height={36} />
      </Stack>
    </Stack>
  );
}

export default memo(CardItemSkeleton);
