import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { IconBrandGithub } from "@tabler/icons-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75 },
};

const projects = [
  {
    image: "/images/certsys.png",
    title: "TESDA Certification System",
    description:
      "A certification management system for TESDA that handles trainee records, assessments, and certificate generation for technical-vocational programs.",
    stack: ["Laravel", "Tailwind CSS", "MySQL", "JavaScript"],
    github: null,
    private: true,
  },
  {
    image: "/images/certsys.png",
    title: "RentWheels",
    description:
      "A full-stack single-business car rental web app with an admin dashboard for managing cars and bookings, and a customer-facing side for browsing and reserving vehicles.",
    stack: ["React", "Laravel", "Inertia.js", "Tailwind CSS", "MySQL"],
    github: "#",
    private: false,
  },
  {
    image: "/images/certsys.png",
    title: "Blinkr",
    description:
      "A mini social media app where users can post, follow others, and interact with a feed. Built as a personal project to explore full-stack social features.",
    stack: ["React", "Laravel", "Tailwind CSS", "SQLite"],
    github: "#",
    private: false,
  },
];

export default function Projects({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full ">
      <div className="mx-auto px-6 py-20 space-y-12 max-w-6xl">
        <motion.div {...fadeUp} className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="text-muted-foreground text-sm">
            Things I've built so far.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.75, delay: index * 0.1 }}
              key={project.title}
              className="flex flex-col justify-between border rounded-xl p-6 space-y-4 hover:border-foreground/20 transition-colors"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover border rounded"
              />

              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-base">{project.title}</h3>
                  {project.private && (
                    <span className="flex items-center gap-1 text-xs text-muted-foreground border rounded-full px-2 py-0.5 shrink-0">
                      <Lock size={10} />
                      Private
                    </span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded-full border bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                {project.private ? (
                  <Button
                    variant="outline"
                    size="sm"
                    disabled
                    className="w-full"
                  >
                    <Lock size={13} className="mr-2" />
                    Private Repo
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full"
                  >
                    <a
                      href={project.github!}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconBrandGithub size={13} className="mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
