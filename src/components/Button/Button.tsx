import { ButtonProps } from '@mui/material/Button';

import { ButtonStyled } from './Button.styled';

function Button(props: ButtonProps) {
  return <ButtonStyled {...props} />;
}

export default Button;
