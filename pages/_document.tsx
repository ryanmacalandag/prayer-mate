import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="I "
          />
          <meta property="og:site_name" content="prayermate.io" />
          <meta
            property="og:description"
            content="Generate a Catholic prayer in seconds."
          />
          <meta property="og:title" content="Catholic Prayer AI Assistant" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Catholic Prayer AI Assistant" />
          <meta
            name="twitter:description"
            content="Generate a Catholic prayer in seconds."
          />
          <meta
            property="og:image"
            content="../public/"
          />
          <meta
            name="twitter:image"
            content="https://twitterbio.io/og-image.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
