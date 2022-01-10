import '../styles/bootstrap.scss';
import './../styles/plugins/fontawesome-free/css/all.min.css';
import '../styles/adminlte.css';
import './../styles/globals.css';
import 'sweetalert2/src/sweetalert2.scss';

import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import Link from 'next/link';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <link
          rel="stylesheet"
          href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
