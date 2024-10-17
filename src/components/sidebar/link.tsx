import React from "react";
import { NavLink } from "react-router-dom";

import { cn } from "@/lib/utils";

export const Link = React.forwardRef<
  React.ElementRef<typeof NavLink>,
  React.ComponentPropsWithoutRef<typeof NavLink> & { isActive: boolean }
>(({ className, isActive, ...props }, ref) => {
  return (
    <li className="flex-1 w-full cursor-pointer flex px-0">
      <NavLink
        className={cn(
          isActive && "bg-neutral-500 [&>*]:text-white",
          !isActive &&
            "bg-indigo-50 border border-indigo-100 [&>*]:text-neutral-500",
          className
        )}
        ref={ref}
        {...props}
      />
    </li>
  );
});

Link.displayName = "Link";
