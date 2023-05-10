import '@src/styles/globals.css';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';

import type { AppProps } from 'next/app';

import { PageWrapper } from '@components/PageWrapper';
import StyledThemeProvider from '@components/StyledThemeProvider';
import { CssBaseline } from '@src/styles/styled';

import store from '../store';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <Provider store={store}>
      <StyledThemeProvider>
        <CssBaseline />
        <PageWrapper className={inter.className}>
          <Component {...pageProps} />
        </PageWrapper>
      </StyledThemeProvider>
    </Provider>
  );
}
