import { useState } from "react";
import LegendNav from "./components/legendNav";
import Section from "./components/Section";
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

  return (
    <div className="transition-colors duration-500 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 min-h-screen font-sans flex">
      {/* Pass setter to LegendNav so it can update sidebarOpen */}
      <LegendNav sections={sections} onToggle={setSidebarOpen} />

      {/* Main content container */}
      <div
        className={`transition-all duration-300 flex-1 ${
          sidebarOpen ? "ml-32" : "ml-0"
        }`}
      >
        <Section id="home">
          <h1 className="text-5xl font-bold mb-4">Welcome</h1>
          <p>This is my portfolio homepage.</p>
        </Section>

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
