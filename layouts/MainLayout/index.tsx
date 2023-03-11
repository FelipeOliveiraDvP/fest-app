import React, { ReactNode } from "react";

import { MainHeader } from "./Header";
import { MainFooter } from "./Footer";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      <MainFooter />
    </>
  );
}
