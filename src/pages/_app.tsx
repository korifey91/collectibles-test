import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';

import type { AppProps } from 'next/app';

import store from '../store';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
