import Button from '@mui/material/Button';

import { styled } from '@src/styles/styled';

export const ButtonStyled = styled(Button)`
  text-transform: none;
  padding: 6px 18px;
  border-radius: 60px;

  &.MuiButton-outlinedPrimary:hover {
    background-color: #3f00c9;
    outline: 1px solid #15181E;
  }
  
  &.MuiButton-outlinedSecondary:hover {
    background-color: #F2F2F2;
    outline: 1px solid #15181E;
  }
`;
