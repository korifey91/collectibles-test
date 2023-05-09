import Typography, { TypographyProps } from '@mui/material/Typography';

interface TextProps extends TypographyProps {
  variant: TypographyProps['variant'] | 'headline' | 'body' | 'bodySemiBold'
}
function Text(props: TextProps) {
  return <Typography {...props} />;
}

export default Text;
