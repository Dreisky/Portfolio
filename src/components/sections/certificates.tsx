import { ArrowRight, SquareArrowOutUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75 },
};

// const academic = [
//   {
//     title: "Academic Distinction",
//     issuer: "Cagayan State University",
//     year: "2026",
//   },
//   {
//     title: "Academic Awardee",
//     issuer: "Cagayan State University",
//     year: "2026",
//   },
//   {
//     title: "Best Capstone",
//     issuer: "Cagayan State University",
//     year: "2026",
//   },
// ];

// const proficiency = [
//   {
//     title: "C# Programming",
//     issuer: "Cagayan State University",
//     year: "2026",
//   },
//   {
//     title: "VB.NET Programming",
//     issuer: "Cagayan State University",
//     year: "2026",
//   },
//   {
//     title: "Static Web Development",
//     issuer: "Cagayan State University",
//     year: "2026",
//   },
//   {
//     title: "Dynamic Web Development",
//     issuer: "Cagayan State University",
//     year: "2026",
//   },
// ];

// const competitions = [
//   {
//     title: "Hack4Gov Participant",
//     issuer: "Hack4Gov",
//     year: "2024",
//   },
//   {
//     title: "Hack4Gov Participant",
//     issuer: "Hack4Gov",
//     year: "2025",
//   },
//   {
//     title: "ICT Uniwide Static Web Champion",
//     issuer: "Cagayan State University",
//     year: "2025",
//   },
//   {
//     title: "ICT Uniwide Dynamic Web Champion",
//     issuer: "Cagayan State University",
//     year: "2026",
//   },
//   {
//     title: "ICT Roadshow 2nd Placer",
//     issuer: "ICT Roadshow",
//     year: "2025",
//   },
// ];

const awards = [
  {
    title: "Academic Distinction",
    issuer: "Cagayan State University",
    logo: "/images/csu.webp",
    year: "2026",
  },
  {
    title: "Civil Service Professional Eligibility",
    issuer: "Civil Service Commission",
    logo: "/images/csc.webp",
    year: "Mar 2025",
  },
  {
    title: "Laravel Foundations",
    issuer: "CodeCred",
    logo: "/images/codecred.png",
    year: "Jun 2026",
  },
  {
    title: "ICT Uniwide Static Web Champion",
    issuer: "Cagayan State University",
    logo: "/images/csu.webp",
    year: "2025",
  },
  {
    title: "ICT Uniwide Dynamic Web Champion",
    issuer: "Cagayan State University",
    logo: "/images/csu.webp",
    year: "2026",
  },
];

export default function Certificates({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full">
      <div className="mx-auto px-6 py-20 space-y-12 max-w-6xl">
        <motion.div {...fadeUp} className="flex items-end justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Certificates</h2>
            <p className="text-muted-foreground text-sm">
              Awards, certifications, and recognitions that reflect my skills
              and achievements.
            </p>
          </div>
          <Link to="/certificates" className="flex items-center gap-2">
            View All
            <SquareArrowOutUpRight size={16} />
          </Link>
        </motion.div>

        <div className="space-y-3">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              {...fadeUp}
              transition={{ duration: 0.75, delay: i * 0.1 }}
              className="p-8 group border flex items-center justify-between rounded-md hover:shadow-lg hover:transition-all hover:duration-300"
            >
              <div className="flex gap-4">
                <img
                  src={award.logo}
                  alt={award.issuer}
                  height={50}
                  width={50}
                />
                <div>
                  <h1 className="text-lg">{award.title}</h1>
                  <p className="text-muted-foreground text-sm">
                    {award.issuer}
                  </p>
                </div>
              </div>
              <div className="group-hover:translate-x-1">
                <ArrowRight size={18} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic */}
        {/* <div className="space-y-4">
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
                transition={{ duration: 0.75, delay: i * 0.1 }}
                key={cert.title}
                className="border shadow-sm rounded-xl p-5 space-y-2 hover:shadow-md hover:-translate-y-1 hover:transition hover:duration-300"
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
        </div> */}

        {/* Proficiency */}
        {/* <div className="space-y-4">
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
                transition={{ duration: 0.75, delay: i * 0.1 }}
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
        </div> */}

        {/* Competitions */}
        {/* <div className="space-y-4">
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
        </div> */}
      </div>
    </section>
  );
}
