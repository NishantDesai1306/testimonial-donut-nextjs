import Head from "next/head";
import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Testimonial Donut Widget Rendered</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </div>
  );
}