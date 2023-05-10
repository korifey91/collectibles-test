import { styled } from '@src/styles/styled';

export const PageWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  scroll-behavior: smooth;
  overflow: auto;
`;

export const PageContent = styled('main')`
  flex-grow: 1;
`;
