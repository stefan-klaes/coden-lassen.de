import React from "react";
import NextLink, { LinkProps } from "next/link";

type CustomLinkProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
  target?: "_blank";
};

const Link = React.forwardRef<HTMLAnchorElement, CustomLinkProps>(
  ({ children, className, target, ...props }, ref) => {
    return (
      <NextLink
        ref={ref}
        target={target}
        className={className}
        prefetch={props.prefetch || false}
        {...props}
      >
        {children}
      </NextLink>
    );
  }
);

Link.displayName = "CustomLink";

export default Link;
