import "./App.css";

import { IconCertificate, IconUser, IconFolder } from "@tabler/icons-react";
import {
  IconBrandFacebookFilled,
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";

import { Routes, Route } from "react-router-dom";

// import { SmoothCursor } from "@/components/ui/smooth-cursor";

import NavBar from "@/components/21st/nav-bar";
import Preloader from "@/components/21st/preloader";

import About from "@/components/sections/about";
import Home from "@/components/sections/home";
import Projects from "@/components/sections/projects";
import Certificates from "@/components/sections/certificates";

import ScrollToTop from "@/components/ui/scroll-to-top";

import CertificatesPage from "@/pages/certificates-page";

function App() {
  return (
    <>
      <ScrollToTop />
      {/* <SmoothCursor /> */}
      <Preloader />

      <NavBar
        items={[
          {
            name: "About",
            url: "/#About",
            icon: IconUser,
          },
          {
            name: "Projects",
            url: "/#Projects",
            icon: IconFolder,
          },
          {
            name: "Certificates",
            url: "/#Certificates",
            icon: IconCertificate,
          },
        ]}
      />
      <Routes>
        <Route
          path="/"
          element={
            <main className="w-full">
              <Home id="Home" />

              <About id="About" />

              <Projects id="Projects" />

              <Certificates id="Certificates" />

              <footer>
                <div className="md:p-5 lg:p-7 p-3  border-t">
                  <div className="max-w-6xl mx-auto px-6 py-2 flex flex-col-reverse gap-2 md:flex-row items-center md:justify-between">
                    <p className="text-sm md:text-md">
                      © 2026 Andrei Victor Balabbo. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="https://www.facebook.com/Dreisky19"
                        target="_blank"
                      >
                        <IconBrandFacebookFilled />
                      </a>
                      <a href="https://github.com/Dreisky" target="_blank">
                        <IconBrandGithubFilled />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/andrei-victor-balabbo-495854412/"
                        target="_blank"
                      >
                        <IconBrandLinkedinFilled />
                      </a>
                    </div>
                  </div>
                </div>
              </footer>
            </main>
          }
        />
        <Route path="/certificates" element={<CertificatesPage />} />
      </Routes>
    </>
  );
}

export default App;
