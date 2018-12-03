// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextDocumentContext, NextScript } from "next/document"
import * as React from "react"

export default class MyDocument extends Document {
  public static async getInitialProps(context: NextDocumentContext) {
    const initialProps = await Document.getInitialProps(context)
    return { ...initialProps }
  }

  public render() {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0; background-color:red; } /* custom! */`}</style>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="stylesheet" href="https://static.nrk.no/core-css/major/1/core-css.min.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" />
          <link rel="stylesheet" href="https://static.nrk.no/origo-css/latest/origo-css.min.css" />
          <link rel="stylesheet" href="transcriber.css" />
          <script async={true} defer={true} src="https://static.nrk.no/origo-css/latest/origo-css.min.js" />
          <script async={true} defer={true} src="https://static.nrk.no/core-icons/major/4/core-icons.min.js" />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
