import Head from "next/head";

function PagesMetaHead({
  title = "Next.js & TailwindCSS Portfolio Project",
  keywords = "next.js, react, web, ui",
  description = "Simple and multi-page next.js and react application",
}) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}

export default PagesMetaHead;