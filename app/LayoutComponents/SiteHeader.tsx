import Head from 'next/head';

const SiteHeader = () => {
  return (
    <Head>
      <title>Brett Cornick</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        httpEquiv="X-UA-Compatible"
        content="IE=edge,chrome=1"
      />
      <meta
        name="description"
        content="Brett is a designer, developer, and scientist with 7+ years of professional experience."
        key="description"
      />
      <meta
        name="author"
        content="Brett Cornick"
      />

      {/* <!-- Twitter card  --> */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:site"
        content="@brett_cornick"
      />
      <meta
        name="twitter:creator"
        content="@brett_cornick"
      />
      <meta
        name="twitter:title"
        content="Brett Cornick"
        key="twitter_title"
      />
      <meta
        name="twitter:description"
        content="Brett is a designer, developer, and scientist with 7+ years of professional experience."
        key="twitter_description"
      />
      <meta
        name="twitter:image"
        content="https://i.imgur.com/YdX7SQH.jpeg"
        key="twitter_image"
      />

      {/* <!-- Open Graph Meta Tags --> */}
      <meta
        property="og:title"
        content="Brett Cornick"
        key="og_title"
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:site_name"
        content="Brett Cornick"
      />
      <meta
        property="og:description"
        content="Brett is a designer, developer, and scientist with 7+ years of professional experience."
        key="og_description"
      />
      <meta
        property="og:url"
        content="https://www.brettcornick.com/"
        key="og_url"
      />
      <meta
        property="og:image"
        content="https://i.imgur.com/YdX7SQH.jpeg"
        key="og_image"
      />
    </Head>
  );
};

export default SiteHeader;
