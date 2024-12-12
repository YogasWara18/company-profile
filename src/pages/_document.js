import Document, { Html, Head, Main, NextScript } from 'next/document';
import { geistSans, geistMono } from '../app/layout'; // Import the font variables

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
