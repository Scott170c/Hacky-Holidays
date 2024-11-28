import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        strategy="beforeInteractive" // Ensures the script loads before rendering
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;