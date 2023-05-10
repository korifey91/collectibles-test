import { CSSProperties } from 'react';

import Divider from '@components/Divider';
import { TextLight } from '@components/Text';
import CardItem from '@features/search/components/CardItem';
import { getFoundSuiteWithCards } from '@features/search/search.selectors';
import { useAppSelector } from '@src/hooks';

import { SuiteSectionContainer } from './SuiteSection.styled';

interface SuiteSectionProps {
  index: number;
  style: CSSProperties;
}

function SuiteSection({ index, style } : SuiteSectionProps) {
  const filteredSuites = useAppSelector(getFoundSuiteWithCards);
  const {
    year,
    seo_suites: cards,
  } = filteredSuites[index];

  return (
    <div style={style}>
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
