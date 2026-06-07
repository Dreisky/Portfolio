import "./App.css";
import { Home as HomeIcon, User, Folder, BookA } from "lucide-react";

import GridVignetteBackground from "@/components/21st/grid-background";
import NavBar from "@/components/21st/nav-bar";
import Preloader from "@/components/21st/preloader";

import About from "@/components/sections/about";
import Home from "@/components/sections/home";
import Projects from "@/components/sections/projects";
import Certificates from "@/components/sections/certificates";

function App() {
  return (
    <>
      <Preloader />

      <GridVignetteBackground className="opacity-15" />

      {/* <div className="fixed inset-0 z-[-2] overflow-hidden">
        <div className="absolute top-50 -left-60 w-120 h-120 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-40 -translate-x-1/2 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
      </div> */}

      <NavBar
        items={[
          {
            name: "Home",
            url: "#Home",
            icon: HomeIcon,
          },
          {
            name: "About",
            url: "#About",
            icon: User,
          },
          {
            name: "Projects",
            url: "#Projects",
            icon: Folder,
          },
          {
            name: "Certificates",
            url: "#Certificates",
            icon: BookA,
          },
        ]}
      />

      <main className="w-full max-w-6xl mx-auto">
        <Home id="Home" />

        <About id="About" />

        <Projects id="Projects" />

        <Certificates id="Certificates" />

        <footer>
          <div className="md:p-8 lg:p-12 p-4  border-t text-center">
            <p className="text-xs md:text-md">
              © 2026 Andrei Victor Balabbo. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
