import { useCallback } from 'react';

import Highlighted from '@components/Highlighted';
import Image from '@components/Image';
import Stack from '@components/Stack';
import { useAppDispatch, useAppSelector, useIsMobile } from '@src/hooks';

import { selectIfCardSelected, selectQuery } from '../../search.selectors';
import { addCardToSelected, removeCardFromSelected } from '../../search.slice';
import { CardInStore } from '../../search.types';
import SelectButton from '../SelectButton';

import { CardImageFallback } from './CardItem.styled';
import ActionButtons from './components/ActionButtons';

type CardItemProps = Pick<CardInStore, 'image' | 'name' | 'id' | 'path'>;

function CardItem({
  image, name, id, path,
}: CardItemProps) {
  const isMobile = useIsMobile();
  const dispatch = useAppDispatch();

  const query = useAppSelector(selectQuery);
  const isSelected = useAppSelector((state) => selectIfCardSelected(state, id));

  const handleSelect = useCallback(() => {
    if (!isSelected) {
      dispatch(addCardToSelected({ id, path }));
    }
  }, [dispatch, id, isSelected, path]);

  const handleDeselect = useCallback(() => {
    dispatch(removeCardFromSelected(id));
  }, [dispatch, id]);

  return (
    <Stack
      direction="column"
      padding="24px 24px 24px 15px"
      spacing="6px"
    >
      <Stack
        direction="row"
        spacing="6px"
        maxHeight={152}
      >
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
          {!isMobile && (
            <ActionButtons isSelected={isSelected} onSkipSelection={handleDeselect} />
          )}
        </Stack>
        <Stack><SelectButton selected={isSelected} onChange={handleSelect} /></Stack>
      </Stack>
      {isMobile && (
        <ActionButtons isSelected={isSelected} onSkipSelection={handleDeselect} />
      )}
    </Stack>
  );
}

export default CardItem;
