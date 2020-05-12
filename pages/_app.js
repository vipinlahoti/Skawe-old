import '../styles/main.scss';
import '@components';
import Skawe from '@skawe';
import App from 'next/app';
import { PageTransition } from 'next-page-transitions';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
 
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
 
    return { pageProps }
  }
 
  render() {
    const { Component, pageProps, router } = this.props;
    const TIMEOUT = 300;

    return (
      <>
        <PageTransition
          timeout={TIMEOUT}
          classNames="page-transition"
        >
          <Component {...pageProps} key={router.route} />
        </PageTransition>

        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
            transform: translate3d(0, 30px, 0);
          }
          .page-transition-enter-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity ${TIMEOUT}ms;
          }
        `}</style>
      </>
    )
  }
}
