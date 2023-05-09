import { Card } from '@features/search/search.types';
import Button from '@src/components/Button';
import Image from '@src/components/Image';
import Stack from '@src/components/Stack';
import Text from '@src/components/Text';

import SelectButton from '../SelectButton';

type CardItemProps = Pick<Card, 'image' | 'name' | 'is_follow'>;

function CardItem({ image, name, is_follow }: CardItemProps) {
  return (
    <Stack direction="row" padding="24px 24px 24px 15px" spacing="6px">
      <Image src={image ?? ''} alt="card-image" width={118} height={118} objectFit="contain" />
      <Stack justifyContent="space-between" flexGrow={1}>
        <Text variant="headline" maxWidth="80%">{name}</Text>
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
