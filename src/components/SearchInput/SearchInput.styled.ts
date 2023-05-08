import Input from '@mui/material/Input';

import { styled } from '@src/styles/styled';

export const SearchInputContainer = styled('label')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  
  background: #FFFFFF;
  border: 1px solid #EAEAEB;
  box-shadow: 0 5px 20px rgba(18, 0, 47, 0.02);
  border-radius: 90px;
`;

export const SearchInputStyled = styled(Input)`
  font-size: 18px;
  line-height: 28px;
  min-width: 224px;
`;
