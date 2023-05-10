import NextImage from 'next/image';

import { css, styled } from '@src/styles/styled';

import { ImageProps } from './Image.types';

export const ImageWithDefault = styled(NextImage)<ImageProps>`
  ${({ objectFit }) => objectFit
    && css`
      object-fit: ${objectFit};
    `}
`;
