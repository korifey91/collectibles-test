import Button from '@components/Button';
import Stack from '@components/Stack';

interface ActionButtonsProps {
  isSelected: boolean;
  onSkipSelection(): void;
}

function ActionButtons({ isSelected, onSkipSelection }: ActionButtonsProps) {
  return (
    <Stack direction="row" spacing={1} alignItems="flex-start">
      {isSelected && (
      <Button
        variant="outlined"
        color="primary"
        onClick={onSkipSelection}
      >
        Skip Selection
      </Button>
      )}
      <Button variant="outlined" color="secondary">Details</Button>
    </Stack>
  );
}

export default ActionButtons;
