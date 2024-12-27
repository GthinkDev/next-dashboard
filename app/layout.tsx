import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import "@/app/ui/styles/global.css";
import { Poppin } from "./ui/fonts/fonts";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};
interface IProps {
  children?: ReactNode;
}

const RootLayout: FC<IProps> = (props) => {
  const { children } = props;
  return (
    <html lang="en">
      <body
        className={`${Poppin.className} text-xl text-gray-800 md:text-3xl md:leading-normal antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default memo(RootLayout);
