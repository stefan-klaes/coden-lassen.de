import { cn } from "@/lib/utils";

export function Typography({
  variant,
  className,
  children,
}: {
  variant: "h1" | "h2" | "h3" | "h4" | "lead";
  className?: string;
  children: React.ReactNode;
}) {
  switch (variant) {
    case "h1":
      return (
        <h1
          className={cn(
            "scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl",
            className
          )}
        >
          {children}
        </h1>
      );

    case "h2":
      return (
        <h2
          className={cn(
            "scroll-m-20 pb-2 text-3xl lg:text-4xl font-semibold tracking-tight",
            className
          )}
        >
          {children}
        </h2>
      );

    case "h3":
      return (
        <h3
          className={cn(
            "scroll-m-20 text-2xl font-semibold tracking-tight",
            className
          )}
        >
          {children}
        </h3>
      );

    case "h4":
      return (
        <h4
          className={cn(
            "scroll-m-20 text-xl font-semibold tracking-tight",
            className
          )}
        >
          {children}
        </h4>
      );

    case "lead":
      return (
        <p className={cn("text-xl text-muted-foreground", className)}>
          {children}
        </p>
      );

    default:
      return <span className={className}>{children}</span>;
  }
}
