import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import JssProvider from 'react-jss/lib/JssProvider'
import flush from 'styled-jsx/server'
import getPageContext from '../imports/getPageContext'

class MyDocument extends Document {
  render () {
    const { pageContext } = this.props

    return (
      <html lang='en' dir='ltr'>
        <Head>
          <title>retrixe's blog</title>
          <link rel='icon' href='/static/favicon.png' />
          <meta charSet='utf-8' />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name='viewport'
            content={
              'user-scalable=0, initial-scale=1, ' +
              'minimum-scale=1, width=device-width, height=device-height'
            }
          />
          {/* PWA primary color */}
          <meta name='theme-color' content={pageContext.theme.palette.primary.main} />
          {/* Open Graph Protocol support. */}
          <meta property='og:title' content='retrixe blog' />
          <meta property='og:type' content='website' />
          <meta property='og:image' content='/static/favicon.png' />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

MyDocument.getInitialProps = ctx => {
  // Resolution order
  //
  // On the server:
  // 1. page.getInitialProps
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the server with error:
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. page.getInitialProps
  // 3. page.render

  // Get the context of the page to collected side effects.
  const pageContext = getPageContext()
  const page = ctx.renderPage(Component => props => ( // eslint-disable-line react/display-name
    <JssProvider
      registry={pageContext.sheetsRegistry}
      generateClassName={pageContext.generateClassName}
    >
      <Component pageContext={pageContext} {...props} />
    </JssProvider>
  ))

  return {
    ...page,
    pageContext,
    styles: (
      <React.Fragment>
        <style
          id='jss-server-side'
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
        />
        {flush() || null}
      </React.Fragment>
    )
  }
}

export default MyDocument
