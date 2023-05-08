import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { PropsWithChildren } from 'react';

import { theme } from '@src/styles/theme';

function StyledThemeProvider({
  children,
}: PropsWithChildren) {
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
}

export default StyledThemeProvider;
