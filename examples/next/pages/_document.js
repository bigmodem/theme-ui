import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ApplyColorModeFromLocalStorage } from 'theme-ui'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    console.log(ApplyColorModeFromLocalStorage)
    return (
      <Html>
        <Head />
        <body>
          <ApplyColorModeFromLocalStorage />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
