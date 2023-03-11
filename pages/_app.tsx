import Head from "next/head";
import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

import MainLayout from "@/layouts/MainLayout";
import { theme } from "@/styles/theme";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Fest</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </MantineProvider>
    </>
  );
}
