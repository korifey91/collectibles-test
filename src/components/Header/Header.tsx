import React, { memo } from 'react';

import CollectbaseLogo from '@public/collectbase-logo.svg';

import { HeaderBackground, LogoLink } from './Header.styled';

function Header() {
  return (
    <HeaderBackground>
      <LogoLink href="/"><CollectbaseLogo /></LogoLink>
    </HeaderBackground>
  );
}

export default memo(Header);
