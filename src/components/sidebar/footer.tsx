import { cn } from "@/lib/utils";
import React from "react";

const Footer = React.forwardRef<
  React.ElementRef<"footer">,
  React.ComponentPropsWithoutRef<"footer">
>(({ className, ...props }, ref) => {
  return (
    <footer
      ref={ref}
      className={cn(
        "absolute bottom-0 flex flex-col items-center justify-center w-full",
        className
      )}
      {...props}
    />
  );
});

Footer.displayName = "Footer";

export { Footer };
