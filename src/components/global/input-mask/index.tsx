import { cn } from "@/lib/utils";
import React from "react";
import BaseInputMask from "react-input-mask";

const InputMask = React.forwardRef<
  React.ElementRef<typeof BaseInputMask>,
  React.ComponentPropsWithoutRef<typeof BaseInputMask>
>(({ className, type, ...props }, ref) => {
  return (
    <BaseInputMask
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
InputMask.displayName = "InputMask";

export { InputMask };
