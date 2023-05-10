import Button from '@components/Button';
import Highlighted from '@components/Highlighted';
import Image from '@components/Image';
import Stack from '@components/Stack';
import { getQuery } from '@features/search/search.selectors';
import { Card } from '@features/search/search.types';
import { useAppSelector } from '@src/hooks';

import SelectButton from '../SelectButton';

type CardItemProps = Pick<Card, 'image' | 'name' | 'is_follow'>;

function CardItem({ image, name, is_follow }: CardItemProps) {
  const query = useAppSelector(getQuery);

  return (
    <Stack direction="row" padding="24px 24px 24px 15px" spacing="6px" maxHeight={152}>
      <Image src={image ?? ''} alt="card-image" width={118} height={118} objectFit="contain" />
      <Stack justifyContent="space-between" flexGrow={1}>
        <Highlighted variant="headline" maxWidth="80%" highlight={query} text={name} />
        <Stack direction="row" spacing={1} alignItems="flex-start">
          {is_follow && <Button variant="outlined" color="primary">Skip Selection</Button>}
          <Button variant="outlined" color="secondary">Details</Button>
        </Stack>
      </Stack>
      <Stack><SelectButton selected={is_follow} onChange={() => {}} /></Stack>
    </Stack>
  );
}

export default CardItem;
