import { Button } from "@/components/ui/button";
import { MapPin, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";
import ImgStack from "@/components/21st/pics";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 1.25 + delay },
});

export default function Home({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center p-6"
    >
      <div className="flex w-full max-w-6xl flex-col-reverse lg:flex-row items-center justify-center lg:gap-12 gap-4">
        {/* TEXT SIDE */}
        <div className="flex-1 text-center lg:text-left space-y-4">
          <motion.div {...fadeUp(0.1)}>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
              Andrei Victor Balabbo
            </h1>
            <p className="flex items-center justify-center lg:justify-start gap-1 text-muted-foreground mt-2">
              <MapPin size={16} />
              <span>Calamagui, San Pablo, Isabela</span>
            </p>
          </motion.div>

          <motion.h3
            {...fadeUp(0.2)}
            className="text-xl lg:text-2xl font-medium text-muted-foreground"
          >
            Aspiring Web Developer
          </motion.h3>

          <motion.p
            {...fadeUp(0.3)}
            className="text-sm lg:text-base text-justify text-muted-foreground max-w-md mx-auto md:mx-0"
          >
            I build modern, responsive web applications using React, Laravel,
            and Inertia.js. I've won ICT competitions in both static and dynamic
            web development, and I'm passionate about clean UI and real-world
            problem solving.
          </motion.p>

          <motion.div
            {...fadeUp(0.4)}
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          >
            <Button className="w-full sm:w-auto">
              <Mail /> Send Email
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              <Download /> Download CV
            </Button>
          </motion.div>
        </div>

        {/* IMAGE SIDE */}
        <motion.div
          className="flex-1 flex justify-end"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.25 }}
        >
          <ImgStack
            images={[
              "/images/profile.jpg",
              "/images/profile1.jpg",
              "/images/profile2.jpg",
              "/images/profile3.jpg",
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
}
