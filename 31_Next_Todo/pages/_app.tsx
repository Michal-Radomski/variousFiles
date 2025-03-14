import type { AppProps } from "next/app";

import "@/styles/globals.scss";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
