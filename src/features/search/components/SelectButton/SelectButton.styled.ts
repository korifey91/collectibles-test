import IconButton from '@components/IconButton';
import { styled } from '@src/styles/styled';

export const IconButtonStyled = styled(IconButton)<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? '#4B10C9' : 'rgba(0, 0, 0, 0.3)')};
  color: #fff;
  
  :hover {
    background-color: ${({ selected }) => (selected ? '#2e0b79' : 'rgba(0,0,0,0.71)')};
  }
`;
