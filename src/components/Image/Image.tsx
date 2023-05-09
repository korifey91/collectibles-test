import { useCallback, useState } from 'react';

import { styled } from '@src/styles/styled';

import { DefaultImage, ImageWithDefault } from './Image.styled';
import { ImageProps } from './Image.types';

function Image({ src, ...props }: ImageProps) {
  const [fallback, setFallback] = useState(false);

  const onImageLoadError = useCallback(() => setFallback(true), []);

  return fallback || !src ? <DefaultImage /> : (
    <ImageWithDefault
      {...props}
      src={src}
      onError={onImageLoadError}
    />
  );
}

export default styled(Image)``;
