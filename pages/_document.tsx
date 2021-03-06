import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
import { IconContext } from 'react-icons'

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <link rel='shortcut icon' href='/favicon.ico' />
          </Head>

          <body>
            <script src='noflash.js' />

            <Main />

            <script src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script>
            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
