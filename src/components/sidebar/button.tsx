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
          "bg-indigo-50 border border-indigo-100 [&>*]:text-red-500 w-full shadow-none rounded-none py-7 space-x-3 hover:bg-indigo-200/50",
          className
        )}
        ref={ref}
        {...props}
      />
    </li>
  );
});

Button.displayName = "Button";
