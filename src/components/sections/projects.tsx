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
    stack: [
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
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
    ],
    github: null,
    private: true,
  },
  {
    image: "/images/rentwheels.png",
    title: "RentWheels",
    description:
      "A full-stack single-business car rental web app with an admin dashboard for managing cars and bookings, and a customer-facing side for browsing and reserving vehicles.",
    stack: [
      {
        name: "Laravel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Inertia.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/inertiajs/inertiajs-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
    github: "#",
    private: false,
  },
  {
    image: "/images/blinkr.png",
    title: "Blinkr",
    description:
      "A mini social media app where users can post, follow others, and interact with a feed. Built as a personal project to explore full-stack social features.",
    stack: [
      {
        name: "Laravel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Inertia.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/inertiajs/inertiajs-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
    ],
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
              className="group flex flex-col hover:shadow-xl transition-all duration-300 justify-between border rounded-lg overflow-hidden hover:border-blue-500 transition-colors"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-44 bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {project.private && (
                  <span className="absolute top-3 right-3 flex items-center gap-1 text-xs bg-background/80 backdrop-blur-sm border rounded-full px-2 py-0.5">
                    <Lock size={10} />
                    Private
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-base transition-colors duration-300 group-hover:text-blue-500">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.stack.map((skill, index) => (
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
