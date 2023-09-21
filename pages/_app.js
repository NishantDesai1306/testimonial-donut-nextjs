import Head from "next/head";
import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }) {
  const firstTestimonialImage = pageProps?.testimonials?.[0]?.video?.poster;

  return (
    <div>
      <Head>
        <title>Testimonial Donut Widget Rendered</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {
          firstTestimonialImage && (
            <link rel="preload" as="image" href={firstTestimonialImage} />
          )
        }
      </Head>

      <Component {...pageProps} />
    </div>
  );
}