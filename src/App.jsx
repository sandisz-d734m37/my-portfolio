import { useState } from "react";
import LegendNav from "./components/legendNav";
import Section from "./components/Section";
import FullScreenSection from "./components/FullScreenSection";
// import FkaTwigsPhotographs from "./components/FkaTwigsPhotographs";
import MiscelaniousConcerts from "./components/MiscelaniousConcerts";
import EcomPhotography from "./components/EcomPhotography";
import PhotographyHomePage from "./components/PhotographyHomePage";
import ProducedGarments from "./components/ProducedGarments";
import scmtLogo from "./assets/SCMT_red.svg";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "produced-garments", label: "Produced Garments" },
    { id: "ecom-photography", label: "Ecommerce Photography" },
    { id: "photography", label: "Misc. Photography" },
    // { id: "fka-twigs", label: "FKA Twigs" },
    // { id: "misc-concerts", label: "Misc. Concert Photography" },
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
          <div className="d-flex justify-content-center align-items-center">
            <div className="text-center py-[20vh]">
              {/* SVG logo */}
              {/* <div className="flex justify-center mb-4">
                <SCMTLogo className="w-[25px] h-[25px]" />
              </div> */}

              <div className="flex justify-center mb-4">
                <img
                  src={scmtLogo}
                  alt="SCMT logo"
                  className="w-[100px] h-[100px] mb-[10vh]"
                />
              </div>

              <h1 className="text-5xl font-bold mb-[10vh]">
                Sandisz C.M. Thieme
              </h1>
              <p className="google-sans-code-mypfolio mb-[10vh]">WELCOME</p>

              <div className="d-flex flex-col gap-3 py-5">
                {sections.map((section, idx) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(idx)}
                    className="px-2 text-left text-sm hover:underline text-black dark:text-white google-sans-code-mypfolio"
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </FullScreenSection>

        <Section id="produced-garments">
          <ProducedGarments />
        </Section>

        <Section id="ecom-photography">
          <EcomPhotography />
        </Section>

        <Section id="photography">
          <PhotographyHomePage />
        </Section>

        {/* <Section id="fka-twigs">
          <FkaTwigsPhotographs />
        </Section> */}

        {/* <Section id="misc-concerts">
          <MiscelaniousConcerts />
        </Section> */}

        <Section id="contact">
          <h2 className="text-4xl font-semibold mb-2">Contact</h2>
          <p>
            <a href="https://www.instagram.com/sadnisz/">@sadnisz</a>
          </p>
          <p>
            <a href="mailto:sandiszthieme@gmail.com">sandiszthieme@gmail.com</a>
          </p>
        </Section>
      </div>
    </div>
  );
}

export default App;
