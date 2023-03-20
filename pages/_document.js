import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const date = new Date();

  // (date.getHours() > 6 && date.getHours() < 18)
  return (
    <Html data-theme={(true) ? "light" : "dark"}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}