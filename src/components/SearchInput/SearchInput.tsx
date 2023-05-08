import { InputProps } from '@mui/material/Input';

import SearchIcon from '@public/search-icon.svg';

import { SearchInputContainer, SearchInputStyled } from './SearchInput.styled';

function SearchInput(props: Omit<InputProps, 'disableUnderline' | 'startAdornment'>) {
  return (
    <SearchInputContainer>
      <SearchIcon />
      <SearchInputStyled {...props} disableUnderline />
    </SearchInputContainer>
  );
}

export default SearchInput;
