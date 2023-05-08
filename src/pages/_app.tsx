import '@src/styles/globals.css';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';

import type { AppProps } from 'next/app';

import StyledThemeProvider from '@src/components/StyledThemeProvider';

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
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </StyledThemeProvider>
    </Provider>
  );
}
