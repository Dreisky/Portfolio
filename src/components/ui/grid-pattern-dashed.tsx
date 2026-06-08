"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";

export function GridPatternDashed() {
  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden">
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(ellipse_1100px_500px_at_center,white,transparent)]",
        )}
      />
    </div>
  );
}
