import React from 'react';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline'

import { makeStyles } from '@material-ui/core/styles';
// https://coolors.co/e5383b-2a2d34-f1c40f-00cc66-ffffff
;


export default function MyApp({ Component, pageProps }) {
  return (
      <>
          <CssBaseline/ >
              <Head>
                  <link rel="preconnect" href="https://fonts.gstatic.com" />
                  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
                    <title>Mateus Franco</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />

              </Head>
              <Component {...pageProps} />    
      </>
  )
}