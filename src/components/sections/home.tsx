import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import ImgStack from "@/components/21st/pics";

export default function Home({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center p-6"
    >
      <div className="flex w-full max-w-6xl flex-col-reverse lg:flex-row items-center justify-center lg:gap-12 gap-4">
        {/* TEXT SIDE */}
        <div className="flex-1 text-center lg:text-left space-y-4">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
              Andrei Victor Balabbo
            </h1>
            <p className="flex items-center justify-center lg:justify-start gap-1 text-muted-foreground mt-2">
              <MapPin size={16} />
              <span>Calamagui, San Pablo, Isabela</span>
            </p>
          </div>

          <h3 className="text-xl lg:text-2xl font-medium text-muted-foreground">
            Aspiring Web Developer
          </h3>

          <p className="text-sm lg:text-base text-muted-foreground max-w-md mx-auto md:mx-0">
            I build modern, responsive web applications using React, Tailwind,
            and shadcn UI. Focused on clean UI and smooth user experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Button className="w-full sm:w-auto">Send Email</Button>
            <Button variant="outline" className="w-full sm:w-auto">
              Download CV
            </Button>
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="flex-1 flex justify-end">
          <ImgStack
            images={[
              "/images/profile.jpg",
              "/images/profile1.jpg",
              "/images/profile2.jpg",
              "/images/profile3.jpg",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
