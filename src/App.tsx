import "./App.css";
import { IconCertificate, IconUser, IconFolder } from "@tabler/icons-react";

// import { SmoothCursor } from "@/components/ui/smooth-cursor";

import NavBar from "@/components/21st/nav-bar";
import Preloader from "@/components/21st/preloader";

import About from "@/components/sections/about";
import Home from "@/components/sections/home";
import Projects from "@/components/sections/projects";
import Certificates from "@/components/sections/certificates";

function App() {
  return (
    <>
      {/* <SmoothCursor /> */}
      <Preloader />

      <NavBar
        items={[
          {
            name: "About",
            url: "#About",
            icon: IconUser,
          },
          {
            name: "Projects",
            url: "#Projects",
            icon: IconFolder,
          },
          {
            name: "Certificates",
            url: "#Certificates",
            icon: IconCertificate,
          },
        ]}
      />

      <main className="w-full">
        <Home id="Home" />

        <About id="About" />

        <Projects id="Projects" />

        <Certificates id="Certificates" />

        <footer>
          <div className="md:p-5 lg:p-7 p-3  border-t text-center">
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
