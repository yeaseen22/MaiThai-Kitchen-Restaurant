import { Html, Head, Main, NextScript } from 'next/document';
import $ from 'jquery';

export default function Document() {

  if (typeof window !== 'undefined') {
    // Code that uses jQuery goes here
    $(document).ready(function () {
      $('.slideGellary').hiSlide();
    })
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>

      {/* Bootstrap jQuery (3.5.1) */}
      <script src="/js/jquery.min.js"></script>

      {/* Bootstrap Popper.js (1.16.1) */}
      <script src="/js/popper.min.js"></script>

      {/* Bootstrap bootstrap.min.js (4.5.2) */}
      <script src="/js/bootstrap.min.js"></script>

      {/*For Gellary Sliders Animation With JQuery*/}
      {/* jQuery (1.12.4) for Gellary Animation this version is required */}
      <script src="/js/jqueryv2.min.js"></script>

      <script type="text/javascript" src="/js/jquery.hislide.js"></script>
      <script src="/js/collapse_button.js"></script>
    </Html>
  )
}
