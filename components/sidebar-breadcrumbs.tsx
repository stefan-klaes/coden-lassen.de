"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "@/components/ui/custom-link";
import { usePathname } from "next/navigation";
import React from "react";

export default function SidebarBreadcrumbs() {
  const pathname = usePathname();
  const [, ...slugsRaw] = pathname.split("/");
  const slugs = slugsRaw ? slugsRaw.filter((slug) => slug !== "") : [];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <Link href="/">Stefan Klaes</Link>
        </BreadcrumbItem>
        {slugs.map((slug, index) => {
          const isLast = index === slugs.length - 1;
          const href = `/${slugs.slice(0, index + 1).join("/")}`;

          return (
            <React.Fragment key={slug}>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>
                    <span className="capitalize">
                      {slug.replaceAll("-", " ")}
                    </span>
                  </BreadcrumbPage>
                ) : (
                  <Link href={href} className="capitalize">
                    {slug.replaceAll("-", " ")}
                  </Link>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
