import Link from '@components/Link';
import { styled } from '@src/styles/styled';

export const HeaderBackground = styled('div')`
  background-color: #F2F2F2;
  height: 97px;
  position: relative;
`;

export const LogoLink = styled(Link)`
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
`;
