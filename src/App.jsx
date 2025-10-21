import { useState } from "react";
import LegendNav from "./components/legendNav";
import Section from "./components/Section";
import FullScreenSection from "./components/FullScreenSection";
import FkaTwigsPhotographs from "./components/FkaTwigsPhotographs";
import MiscelaniousConcerts from "./components/MiscelaniousConcerts";
import EcomPhotography from "./components/EcomPhotography";
import PhotographyHomePage from "./components/PhotographyHomePage";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "photography", label: "Photography" },
    { id: "ecom-photography", label: "Ecommerce Photography" },
    { id: "fka-twigs", label: "FKA Twigs" },
    { id: "misc-concerts", label: "Misc. Concert Photographs" },
    { id: "design", label: "Design" },
    { id: "contact", label: "Contact" },
  ];

  function scrollToSection(idx) {
    const el = document.getElementById(sections[idx].id);
    if (!el) return;
    window.scrollTo({
      top: el.offsetTop,
      behavior: "smooth",
    });
  }

  return (
    <div className="transition-colors duration-500 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 min-h-screen google-sans-code-mypfolio flex">
      {/* Pass setter to LegendNav so it can update sidebarOpen */}
      <LegendNav sections={sections} onToggle={setSidebarOpen} />

      {/* Main content container */}
      <div
        className={`transition-all duration-300 flex-1 ${
          sidebarOpen ? "ml-32 sm:ml-52" : "ml-0 sm:ml-20"
        }`}
      >
        <FullScreenSection id="home">
          <div class="d-flex justify-content-center align-items-center">
            <div class="text-center py-[40vh]">
              <h1 className="text-5xl font-bold mb-4">Sandisz C.M. Thieme</h1>
              <p class="google-sans-code-mypfolio">Welcome</p>

              {/* Right column: sidebar */}
              <div className="d-flex flex-col gap-3 py-5">
                {sections.map((section, idx) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(idx)}
                    className={`px-2 text-left text-sm hover:underline text-black dark:text-white google-sans-code-mypfolio`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </FullScreenSection>

        <Section id="photography">
          <PhotographyHomePage />
        </Section>

        <Section id="ecom-photography">
          <EcomPhotography />
        </Section>

        <Section id="fka-twigs">
          <FkaTwigsPhotographs />
        </Section>

        <Section id="misc-concerts">
          <MiscelaniousConcerts />
        </Section>

        <Section id="design">
          <h2 className="text-4xl font-semibold mb-2">Design</h2>
          <p>Design projects will go here.</p>
        </Section>

        <Section id="contact">
          <h2 className="text-4xl font-semibold mb-2">Contact</h2>
          <p>Get in touch form or email goes here.</p>
        </Section>
      </div>
    </div>
  );
}

export default App;
