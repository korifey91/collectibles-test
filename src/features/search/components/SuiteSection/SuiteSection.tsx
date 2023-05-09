import CardItem from '@features/search/components/CardItem';
import { Card } from '@features/search/search.types';
import Divider from '@src/components/Divider';
import { TextLight } from '@src/components/Text';

import { SuiteSectionContainer } from './SuiteSection.styled';

interface SuiteSectionProps {
  year: number;
  cards: Pick<Card, 'id' | 'name' | 'image' | 'is_follow'>[]
}

function SuiteSection({ year, cards } : SuiteSectionProps) {
  return (
    <div>
      <TextLight variant="h3">{year}</TextLight>
      <SuiteSectionContainer divider={<Divider flexItem />}>
        {cards.map((card) => (
          <CardItem
            key={card.id}
            image={card.image}
            is_follow={card.is_follow}
            name={card.name}
          />
        ))}
      </SuiteSectionContainer>
    </div>
  );
}

export default SuiteSection;
