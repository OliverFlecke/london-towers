import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="The towers of London seen from Canary Wharf"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#38bdf8"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#075985"
        />
        <meta name="color-scheme" content="dark light" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
