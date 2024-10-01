import { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import { cache } from '@emotion/css';

export default function Document() {
  const { extractCriticalToChunks } = createEmotionServer(cache);

  const render = ({ html }) => {
    const chunks = extractCriticalToChunks(html);
    return chunks;
  };

  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
