"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "@/components/ui/custom-link";
import { HomeIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

export default function SidebarBreadcrumbs() {
  const pathname = usePathname();
  const [, ...slugsRaw] = pathname.split("/");
  const slugs = slugsRaw ? slugsRaw.filter((slug) => slug !== "") : [];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          {slugs.length > 1 ? (
            <>
              <div className="hidden lg:block">
                <Link href="/">
                  Stefan Klaes
                  {slugs.length === 0 ? " - WordPress Entwickler" : ""}
                </Link>
              </div>
              <div className="block lg:hidden">
                <Link href="/">
                  <HomeIcon className="size-4" />
                </Link>
              </div>
            </>
          ) : (
            <Link href="/">
              Stefan Klaes{slugs.length === 0 ? " - WordPress Entwickler" : ""}
            </Link>
          )}
        </BreadcrumbItem>
        {slugs.map((slug, index) => {
          const isLast = index === slugs.length - 1;
          const href = `/${slugs.slice(0, index + 1).join("/")}`;

          return (
            <React.Fragment key={slug}>
              <BreadcrumbSeparator />
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
