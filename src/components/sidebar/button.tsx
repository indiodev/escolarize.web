import React from "react";

import { Button as BaseButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Button = React.forwardRef<
  React.ElementRef<typeof BaseButton>,
  React.ComponentPropsWithoutRef<typeof BaseButton>
>(({ className, ...props }, ref) => {
  return (
    <li className="flex-1 w-full cursor-pointer flex px-0">
      <BaseButton
        className={cn(
          "bg-neutral-100 border border-neutral-200 [&>*]:text-neutral-500 w-full shadow-none rounded-none py-7 space-x-3 hover:bg-neutral-300/50",
          className
        )}
        ref={ref}
        {...props}
      />
    </li>
  );
});

Button.displayName = "Button";
