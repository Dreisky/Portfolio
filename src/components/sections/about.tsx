import { Code2, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { SkillsMarquee } from "@/components/sections/skills";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75 },
};

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
        <motion.div {...fadeUp} transition={{ duration: 0.75, delay: 0.2 }}>
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            <GraduationCap size={16} />
            Education
          </div>
          <div className="rounded-xl p-5 space-y-1 bg-dark border border-border/50 bg-muted backdrop-blur-md">
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
        </motion.div>
      </div>
    </section>
  );
}
