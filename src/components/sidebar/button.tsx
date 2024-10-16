import React from "react";

import { Button as BaseButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Button = React.forwardRef<
  React.ElementRef<typeof BaseButton>,
  React.ComponentPropsWithoutRef<typeof BaseButton>
>(({ className, ...props }, ref) => {
  return (
    <li className="flex-1 w-full cursor-pointer flex px-0">
      <BaseButton className={cn(className)} ref={ref} {...props} />
    </li>
  );
});

Button.displayName = "Button";
