import { Code2, Briefcase, GraduationCapIcon } from "lucide-react";
import { motion } from "framer-motion";
import { SkillsMarquee } from "@/components/sections/skills";
import { GridPatternLinearGradient } from "@/components/ui/grid-pattern-linear-gradient";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75 },
};

const workExp: string[] = [
  "Built an internal certificate management system for TESDA Region 2 employees, enabling admins to issue digital certificates directly from the platform",
  "Implemented an approval workflow where issued certificates are routed to the Regional Director for confirmation before becoming accessible to recipients",
  "Once approved, employees can log into their accounts and view their certificate with the Regional Director's digital signature applied.",
  "Connected to TESDA's existing database alongside the app's own database to pull live employee records without duplicating data",
];

const skills = [
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Vite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

export default function About({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full">
      <div className="mx-auto px-6 py-20 space-y-16 max-w-6xl">
        {/* Intro */}
        <motion.div className="space-y-4" {...fadeUp}>
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <p className="text-muted-foreground text-justify text-base leading-relaxed">
            I'm Andrei Victor Balabbo, an aspiring web developer from Calamagui,
            San Pablo, Isabela. I enjoy building clean, responsive web
            applications that are easy to use and pleasant to look at. I've
            competed in regional events like Hack4Gov and placed in ICT
            competitions as both a Static and Dynamic Web champion. I'm actively
            looking for opportunities where I can grow, contribute, and work
            alongside experienced developers.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="space-y-3"
          {...fadeUp}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            <Code2 size={16} />
            Skills And Stacks
          </div>
          <SkillsMarquee />
        </motion.div>

        {/* Education */}
        <motion.div {...fadeUp} transition={{ duration: 0.75, delay: 0.3 }}>
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4 ">
            <GraduationCapIcon size={16} />
            Education
          </div>
          <div className="relative rounded-xl p-12 space-y-1 border hover:shadow-xl transition duration-300">
            <GridPatternLinearGradient />
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <img src="/images/csu.webp" alt="CSU Logo" width={70} />
              <div>
                <p className="font-semibold text-xl md:text-start text-center">
                  Bachelor of Science in Information Technology
                </p>
                <p className="text-sm md:text-start text-center mb-4 text-muted-foreground">
                  Cagayan State University | 2022 - 2026
                </p>
                <p className="text-md font-medium md:text-start text-center">
                  Academic Distinction
                </p>
                <p className="text-sm font-medium md:text-start text-center">
                  GWA: <span>92.58</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Work */}
        <motion.div {...fadeUp} transition={{ duration: 0.75, delay: 0.3 }}>
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            <Briefcase size={16} />
            Work
          </div>

          <div className="relative rounded-xl p-10 border hover:shadow-xl transition duration-300 space-y-6 overflow-hidden">
            <GridPatternLinearGradient />

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Logo */}
              <img src="/images/tesda.webp" alt="TESDA Logo" width={70} />

              {/* Content */}
              <div className="flex-1">
                <p className="font-semibold text-xl md:text-left text-center">
                  Web Development Intern
                </p>

                <p className="text-muted-foreground text-sm mb-4 md:text-left text-center">
                  TESDA Region II | Dec 2025 - Apr 2026
                </p>

                {/* Work Experience */}
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground text-justify">
                  {workExp.map((exp, i) => (
                    <li key={i}>{exp}</li>
                  ))}
                </ul>

                {/* Skills (NOW HORIZONTAL) */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1 text-xs"
                    >
                      <img
                        src={skill.icon}
                        height={14}
                        width={14}
                        alt={skill.name}
                      />
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
