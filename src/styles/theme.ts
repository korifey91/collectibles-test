import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    headline: React.CSSProperties;
    body: React.CSSProperties;
    bodySemiBold: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    headline?: React.CSSProperties;
    body?: React.CSSProperties;
    bodySemiBold?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    headline: true;
    body: true;
    bodySemiBold: true;
  }
}

const rem = (size: number) => `${size / 16}rem`;

function getTextStyles(
  fontWeight: number,
  fontSize: number,
  lineHeight: string,
) {
  return {
    fontSize: rem(fontSize),
    lineHeight,
    fontWeight,
  };
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4B10C9',
    },
    secondary: {
      main: '#F2F2F2',
    },
  },
  typography: {
    fontFamily: 'var(--font-inter)',
    headline: getTextStyles(400, 18, '28px'),
    body: getTextStyles(400, 15, '24px'),
    bodySemiBold: getTextStyles(600, 15, '24px'),
    h3: getTextStyles(600, 28, '36px'),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        labelSmall: {
          paddingLeft: 6,
          paddingRight: 6,
        },
        sizeSmall: {
          height: 22,
        },
      },
    },
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#EAEAEB',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#15181E',
        },
        outlinedPrimary: {
          backgroundColor: '#4B10C9',
          color: '#FFFFFF',
          ...getTextStyles(600, 15, '24px'),
        },
        outlinedSecondary: {
          backgroundColor: '#F2F2F2',
          color: '#15181E',
          ...getTextStyles(600, 15, '24px'),
        },
      },
    },
  },
});
