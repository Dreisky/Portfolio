import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { IconSendFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items }: NavBarProps) {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="w-full fixed bg-background/60 backdrop-blur-lg border-b z-50">
      <div className="max-w-6xl mx-auto py-3 px-6 flex items-center justify-between">
        <a href="#Home" onClick={() => setActiveTab("")}>
          <h1 className="font-bold text-xl">Drei.</h1>
        </a>

        <nav className="flex items-center gap-1">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            return (
              <a
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Icon size={15} strokeWidth={2} />
                <span className="hidden md:inline">{item.name}</span>
              </a>
            );
          })}

          <a
            href="mailto:andreibalabbo08@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors duration-200 bg-blue-500"
          >
            <IconSendFilled size={15} />
            <span className="hidden md:inline">Email</span>
          </a>

          <div className="flex border-s items-center ms-3">
            <AnimatedThemeToggler className="h-10 ms-4" />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
