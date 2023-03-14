import React, { ReactNode } from "react";
import Head from "next/head";
import { Container } from "@mantine/core";

import { MainHeader } from "./Header";
import { MainFooter } from "./Footer";
import { Favicon } from "./Favicon";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Head>
        <Favicon />
      </Head>
      <MainHeader />
      <Container my={48}>{children}</Container>
      <MainFooter />
    </>
  );
}
