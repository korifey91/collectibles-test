import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

import { IconButtonStyled } from './SelectButton.styled';

interface SelectButtonProps {
  selected: boolean;
  onChange(): void;
}

function SelectButton({ selected, onChange }: SelectButtonProps) {
  return (
    <IconButtonStyled selected={selected} onClick={onChange}>
      {selected ? <StarRateRoundedIcon /> : <StarOutlineRoundedIcon />}
    </IconButtonStyled>
  );
}

export default SelectButton;
