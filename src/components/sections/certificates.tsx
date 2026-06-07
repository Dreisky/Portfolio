import { Award, BadgeCheck, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75 },
};

const academic = [
  {
    title: "Academic Distinction",
    issuer: "Cagayan State University",
    year: "2026",
  },
  {
    title: "Academic Awardee",
    issuer: "Cagayan State University",
    year: "2026",
  },
  {
    title: "Best Capstone",
    issuer: "Cagayan State University",
    year: "2026",
  },
];

const proficiency = [
  {
    title: "C# Programming",
    issuer: "Cagayan State University",
    year: "2026",
  },
  {
    title: "VB.NET Programming",
    issuer: "Cagayan State University",
    year: "2026",
  },
  {
    title: "Static Web Development",
    issuer: "Cagayan State University",
    year: "2026",
  },
  {
    title: "Dynamic Web Development",
    issuer: "Cagayan State University",
    year: "2026",
  },
];

const competitions = [
  {
    title: "Hack4Gov Participant",
    issuer: "Hack4Gov",
    year: "2024",
  },
  {
    title: "Hack4Gov Participant",
    issuer: "Hack4Gov",
    year: "2025",
  },
  {
    title: "ICT Uniwide Static Web Champion",
    issuer: "Cagayan State University",
    year: "2025",
  },
  {
    title: "ICT Uniwide Dynamic Web Champion",
    issuer: "Cagayan State University",
    year: "2026",
  },
  {
    title: "ICT Roadshow 2nd Placer",
    issuer: "ICT Roadshow",
    year: "2025",
  },
];

export default function Certificates({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full mx-auto px-6 py-20 space-y-12">
      <motion.div {...fadeUp} className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Certificates</h2>
        <p className="text-muted-foreground text-sm">
          Awards and proficiency recognitions from Cagayan State University.
        </p>
      </motion.div>

      {/* Academic */}
      <div className="space-y-4">
        <motion.div
          {...fadeUp}
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground"
        >
          <Award size={14} />
          Academic
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {academic.map((cert, i) => (
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.75, delay: i * 0.2 }}
              key={cert.title}
              className="border rounded-xl p-5 space-y-2 hover:border-foreground/20 transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="font-semibold text-sm">{cert.title}</p>
                <Award
                  size={15}
                  className="text-muted-foreground shrink-0 mt-0.5"
                />
              </div>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Proficiency */}
      <div className="space-y-4">
        <motion.div
          {...fadeUp}
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground"
        >
          <BadgeCheck size={14} />
          Proficiency
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {proficiency.map((cert, i) => (
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.75, delay: i * 0.2 }}
              key={cert.title}
              className="border rounded-xl p-5 space-y-2 hover:border-foreground/20 transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="font-semibold text-sm">{cert.title}</p>
                <BadgeCheck
                  size={15}
                  className="text-muted-foreground shrink-0 mt-0.5"
                />
              </div>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Competitions */}
      <div className="space-y-4">
        <motion.div
          {...fadeUp}
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground"
        >
          <Trophy size={14} />
          Competitions
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {competitions.map((cert, i) => (
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.75, delay: i * 0.1 }}
              key={`${cert.title}-${i}`}
              className="border rounded-xl p-5 space-y-2 hover:border-foreground/20 transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="font-semibold text-sm">{cert.title}</p>
                <Trophy
                  size={15}
                  className="text-muted-foreground shrink-0 mt-0.5"
                />
              </div>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
