import { Html, Head, Main, NextScript } from 'next/document'
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Page Title */}
        <title>Open-Audio TTS</title>
        
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        
        {/* Meta Tags for SEO */}
        <meta name="description" content="An OpenAI-powered Text-to-Speech tool." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.openaudio.ai/" />
        <meta property="og:title" content="Open-Audio TTS" />
        <meta property="og:description" content="An OpenAI-powered Text-to-Speech tool." />
        <meta property="og:image" content="https://www.openaudio.ai/og-image.svg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.openaudio.ai/" />
        <meta property="twitter:title" content="Open-Audio TTS" />
        <meta property="twitter:description" content="An OpenAI-powered Text-to-Speech tool." />
        <meta property="twitter:image" content="https://www.openaudio.ai/og-image.svg" />

        {/* Add additional meta tags as needed */}
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />

      </body>
    </Html>
  )
}
