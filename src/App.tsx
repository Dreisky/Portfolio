import "./App.css";
import { Home as HomeIcon, User, Folder, BookA } from "lucide-react";

import GridVignetteBackground from "@/components/21st/grid-background";
import NavBar from "@/components/21st/nav-bar";

import About from "@/components/sections/about";
import Home from "@/components/sections/home";
import Projects from "@/components/sections/projects";
import Certificates from "@/components/sections/certificates";

function App() {
  return (
    <>
      <GridVignetteBackground className="opacity-10" />

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
            <p>© 2026 Andrei Victor Balabbo. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
export default App;
