import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function IconServices({
  items,
  className,
  title,
  footerNote,
}: {
  items: ServiceItem[];
  className?: string;
  title?: string;
  footerNote?: string;
}) {
  return (
    <div className={cn("space-y-8 p-4", className)}>
      {title ? <Typography variant="h3">{title}</Typography> : null}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((service, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-none size-12 rounded-lg bg-muted ">
              <div className="flex items-center justify-center size-full">
                <service.icon className="size-6 text-muted-foreground" />
              </div>
            </div>
            <div className="flex-grow">
              <h4 className="text-lg font-semibold">{service.title}</h4>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      {footerNote ? (
        <p className="text-sm text-muted-foreground">{footerNote}</p>
      ) : null}
    </div>
  );
}
