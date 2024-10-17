import { cn } from "@/lib/utils";
import React from "react";

export const Menu = React.forwardRef<
  React.ElementRef<"ul">,
  React.ComponentPropsWithoutRef<"ul">
>(({ className, ...props }, ref) => {
  return <ul ref={ref} className={cn(className)} {...props} />;
});

Menu.displayName = "Menu";
