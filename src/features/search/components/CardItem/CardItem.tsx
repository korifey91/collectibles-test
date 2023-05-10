import { useCallback } from 'react';

import Button from '@components/Button';
import Highlighted from '@components/Highlighted';
import Image from '@components/Image';
import Stack from '@components/Stack';
import { selectIfCardSelected, selectQuery } from '@features/search/search.selectors';
import { addCardToSelected, removeCardFromSelected } from '@features/search/search.slice';
import { Card } from '@features/search/search.types';
import { useAppDispatch, useAppSelector } from '@src/hooks';

import SelectButton from '../SelectButton';

import { CardImageFallback } from './CardItem.styled';

interface CardItemProps extends Pick<Card, 'image' | 'name' | 'id'> {
  path: [number, number];
}

function CardItem({
  image, name, id, path,
}: CardItemProps) {
  const dispatch = useAppDispatch();

  const query = useAppSelector(selectQuery);
  const isSelected = useAppSelector((state) => selectIfCardSelected(state, id));

  const handleSelect = useCallback(() => {
    if (!isSelected) {
      dispatch(addCardToSelected({
        id,
        path,
      }));
    }
  }, [dispatch, id, isSelected, path]);

  const handleDeselect = useCallback(() => {
    dispatch(removeCardFromSelected(id));
  }, [dispatch, id]);

  return (
    <Stack direction="row" padding="24px 24px 24px 15px" spacing="6px" maxHeight={152}>
      <Image
        src={image ?? ''}
        fallback={<CardImageFallback />}
        alt="card-image"
        width={118}
        height={118}
        objectFit="contain"
      />
      <Stack justifyContent="space-between" flexGrow={1}>
        <Highlighted variant="headline" maxWidth="80%" highlight={query} text={name} />
        <Stack direction="row" spacing={1} alignItems="flex-start">
          {isSelected && (
          <Button
            variant="outlined"
            color="primary"
            onClick={handleDeselect}
          >
            Skip Selection
          </Button>
          )}
          <Button variant="outlined" color="secondary">Details</Button>
        </Stack>
      </Stack>
      <Stack><SelectButton selected={isSelected} onChange={handleSelect} /></Stack>
    </Stack>
  );
}

export default CardItem;
