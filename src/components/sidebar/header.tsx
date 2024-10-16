import { cn } from "@/lib/utils";
import React from "react";

const Header = React.forwardRef<
  React.ElementRef<"header">,
  React.ComponentPropsWithoutRef<"header">
>(({ className, ...props }, ref) => {
  return (
    <header
      ref={ref}
      className={cn(
        "py-12 flex items-center justify-center border-b relative",
        className
      )}
      {...props}
    />
  );
});

Header.displayName = "Header";

export { Header };
