import { Code2, GraduationCap } from "lucide-react";

export default function About({ id }: { id?: string }) {
  const skills = [
    "React",
    "TypeScript",
    "Laravel",
    "Inertia.js",
    "Tailwind CSS",
    "shadcn/ui",
    "MySQL",
    "PHP",
    "Git",
    "Vite",
  ];

  return (
    <section id={id} className="w-full mx-auto px-6 py-20 space-y-16">
      {/* Intro */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          I'm Andrei Victor Balabbo, an aspiring web developer from Calamagui,
          San Pablo, Isabela. I enjoy building clean, responsive web
          applications that are easy to use and pleasant to look at. I've
          competed in regional events like Hack4Gov and placed in ICT
          competitions as both a Static and Dynamic Web champion. I'm actively
          looking for opportunities where I can grow, contribute, and work
          alongside experienced developers.
        </p>
      </div>

      {/* Skills */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          <Code2 size={16} />
          Skills & Stack
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm rounded-full border bg-muted text-muted-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
        <GraduationCap size={16} />
        Education
      </div>
      <div className="border rounded-xl p-5 space-y-1">
        <p className="font-semibold text-base">
          Bachelor of Science in Information Technology
        </p>
        <p className="text-muted-foreground text-sm">
          Cagayan State University — 2026
        </p>
        <p className="text-muted-foreground text-sm">
          Focused on web development and database systems
        </p>
        <p className="text-sm font-medium mt-2">
          GWA: <span className="text-foreground">92.58</span>
        </p>
      </div>
    </section>
  );
}
