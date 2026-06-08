// src/components/StatusBar.tsx
import { Music, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function StatusBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Manila",
        }),
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sticky top-17 z-40 w-full border-y border-border/50 bg-background/80 backdrop-blur-md px-6 py-2 flex items-center justify-between text-xs text-muted-foreground">
      {/* Left — now playing */}
      <div className="flex items-center gap-2">
        <Music size={12} />
        <span className="uppercase tracking-widest font-medium">
          Now Playing: <span className="text-foreground">zzz...</span>
        </span>
      </div>

      {/* Center — status */}
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="text-green-400 font-semibold uppercase tracking-widest">
          Available
        </span>
        <span className="text-border">|</span>
        <span className="uppercase tracking-widest">Open to Work</span>
      </div>

      {/* Right — time */}
      <div className="flex items-center gap-1">
        <Clock size={12} />
        <span>{time} (UTC +8:00)</span>
      </div>
    </div>
  );
}
