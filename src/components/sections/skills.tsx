import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const skills = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Vite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "npm",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
];

const SkillCard = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-full border cursor-default",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.05] dark:hover:bg-gray-50/[.10]",
        "transition-colors",
      )}
    >
      <img src={icon} width={18} height={18} alt={name} />
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

export function SkillsMarquee() {
  const firstRow = skills.slice(0, Math.ceil(skills.length / 2));
  const secondRow = skills.slice(Math.ceil(skills.length / 2));

  return (
    <div className="relative flex w-full flex-col gap-4 items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:25s]">
        {firstRow.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:25s]">
        {secondRow.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee>

      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" />
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" />
    </div>
  );
}
