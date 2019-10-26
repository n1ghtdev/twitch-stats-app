import React from 'react';
import App from 'next/app';

class MyApp extends App {
  static async getInitialProps(props: any) {
    let pageProps = {};

    if (props.Component.getInitialProps) {
      pageProps = await props.Component.getInitialProps(props.ctx);
    }

    return { pageProps };
  }
  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default MyApp;
