"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";

export function GridPatternLinearGradient() {
  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden opacity-80">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_top_left,white,transparent,transparent)]",
        )}
      />
    </div>
  );
}
