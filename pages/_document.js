import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    if (this.props.__NEXT_DATA__.page.startsWith('/admin')) {
      return (
        <Html>
          <Head />
          <body
            className={
              'hold-transition layout-top-nav layout-navbar-fixed layout-footer-fixed'
            }
          >
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }

    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
