import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import '@/styles/style.css';
import '@/styles/colors.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
