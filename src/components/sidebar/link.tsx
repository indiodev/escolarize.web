import React from "react";
import { NavLink } from "react-router-dom";

import { cn } from "@/lib/utils";
// import "./style.css";

export const Link = React.forwardRef<
  React.ElementRef<typeof NavLink>,
  React.ComponentPropsWithoutRef<typeof NavLink> & { isActive: boolean }
>(({ className, isActive, ...props }, ref) => {
  console.log({ isActive });
  return (
    <li className="flex-1 w-full cursor-pointer flex">
      <NavLink className={cn(className)} ref={ref} {...props} />
    </li>
  );
});

Link.displayName = "Link";
