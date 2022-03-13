import Head from 'next/head';

export default function SEO({ title, description, favicon }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href={favicon} type="image/x-icon"></link>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property='og:image' content={favicon} />
    </Head>
  );
}