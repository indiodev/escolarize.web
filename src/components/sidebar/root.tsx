import { cn } from "@/lib/utils";
import React from "react";

const Root = React.forwardRef<
  React.ElementRef<"aside">,
  React.ComponentPropsWithoutRef<"aside">
>(({ className, ...props }, ref) => (
  <aside
    className={cn(
      "max-w-[15rem] lg:max-w-[20.75rem] w-full shadow-sm flex-1 relative h-full bg-white",
      className
    )}
    {...props}
    ref={ref}
  />
));

Root.displayName = "Root";

export { Root };
