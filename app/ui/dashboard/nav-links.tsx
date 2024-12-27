"use client";

import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

interface IProps {
  children?: ReactNode;
}

const NavLinks: FC<IProps> = (props) => {
  const links = siteConfig.navMain;
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.title}
            href={link.url}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.url,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.title}</p>
          </Link>
        );
      })}
    </>
  );
};

export default memo(NavLinks);
