import { useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);

  return (
    <div
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-50",
        "bottom-6 sm:bottom-auto sm:top-6",
        className,
      )}
    >
      <nav className="flex items-center gap-1 bg-white/80 dark:bg-black/50 border border-black/10 dark:border-white/10 backdrop-blur-md py-1 px-1 rounded-full shadow-sm">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <a
              key={item.name}
              href={item.url}
              aria-label={item.name}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200",
                isActive
                  ? "text-black dark:text-white"
                  : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white",
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-black/8 dark:bg-white/10 border border-black/8 dark:border-white/10"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}

              {isActive && (
                <motion.div
                  layoutId="active-lamp"
                  className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-5 h-[3px] rounded-b-sm bg-black dark:bg-white"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}

              <Icon
                size={16}
                strokeWidth={2}
                className="relative z-10 shrink-0"
              />
              <span className="relative z-10 hidden md:inline">
                {item.name}
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}

export default NavBar;
