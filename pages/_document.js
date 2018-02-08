// @flow
/* eslint-disable react/no-unescaped-entities */
// Replaces the index.html file :3
import * as React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
      <html lang='en-US'>
        <Head>
          <link rel='icon' href='/static/favicon.png' />
          <style>{`
            @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500&subset=latin-ext');
            body { margin: 0 }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
