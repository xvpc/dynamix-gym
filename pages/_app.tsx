import 'bootstrap/dist/css/bootstrap.min.css';

import '@/styles/style.css'
import type { AppProps } from 'next/app'

// Context
import UserContext from '@/utils/userContext';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <UserContext>
      <Component {...pageProps} />
    </UserContext>
  );
}
