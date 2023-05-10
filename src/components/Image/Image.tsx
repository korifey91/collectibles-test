import { memo, useCallback, useState } from 'react';

import { styled } from '@src/styles/styled';

import { ImageWithDefault } from './Image.styled';
import { ImageProps } from './Image.types';

function Image({ src, fallback: FallbackElement, ...props }: ImageProps) {
  const [fallback, setFallback] = useState(false);

  const onImageLoadError = useCallback(() => setFallback(true), []);

  const showFallback = (fallback || !src) && FallbackElement;

  return showFallback ? FallbackElement : (
    <ImageWithDefault
      {...props}
      src={src}
      onError={onImageLoadError}
    />
  );
}

export default styled(memo(Image))``;
