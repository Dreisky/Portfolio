import { Button } from "@/components/ui/button";
import { GridPatternDashed } from "@/components/ui/grid-pattern-dashed";

import { Download, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

import ImageReveal from "@/components/21st/pics";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 1.25 + delay },
});

export default function Home({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="relative w-full min-h-screen flex items-center justify-center p-6 overflow-hidden"
    >
      <GridPatternDashed />

      <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-8">
        {/* IMAGE TOP */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.25 }}
        >
          <ImageReveal
            leftImage="/images/profile3.jpg"
            middleImage="/images/profile.jpg"
            rightImage="/images/profile2.jpg"
          />
        </motion.div>

        {/* TEXT BELOW */}
        <div className="text-center space-y-4">
          <motion.div {...fadeUp(0.1)}>
            {/* Open to Work badge */}
            <div className="flex justify-center mb-8">
              <span className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border bg-green-500/10 text-green-500 border-green-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Open to Work
              </span>
            </div>

            <p className="text-muted-foreground">👋 Hi, my name is</p>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Andrei Victor Balabbo.
            </h1>
          </motion.div>

          <motion.p
            {...fadeUp(0.3)}
            className="text-sm lg:text-base text-muted-foreground max-w-xl mx-auto"
          >
            Full-stack developer focused on React and Laravel. ICT Web Champion.
            Passionate about clean UI and real-world problem solving.
          </motion.p>

          <motion.div
            {...fadeUp(0.4)}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a href="/files/CV_BALABBO.pdf" download>
              <Button
                variant="outline"
                className="w-full sm:w-auto px-12 py-6 mt-4 text-md"
              >
                <Download /> Download CV
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        {...fadeUp(0.5)}
        className="absolute bottom-8 flex flex-col items-center"
      >
        <p className="mb-2 text-muted-foreground text-sm">See More...</p>
        <span>
          <ArrowDown size={18} className="animate-bounce" />
        </span>
      </motion.div>
    </section>
  );
}
