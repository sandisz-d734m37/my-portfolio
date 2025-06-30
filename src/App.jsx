import { useState, useEffect } from "react";
import HUD from "./components/hud";
import Section from "./components/Section";
import FkaTwigsPhotographs from "./components/FkaTwigsPhotographs";
import PhotographyHomePage from "./components/PhotographyHomePage";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="transition-colors duration-500 bg-neutral-200 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 min-h-screen font-sans">
      <HUD toggleTheme={() => setIsDark((prev) => !prev)} isDark={isDark} />
      <Section id="home">
        <h1 className="text-5xl font-bold mb-4">Welcome</h1>
        <p>This is my portfolio homepage.</p>
      </Section>
      <Section id="photography">
        <PhotographyHomePage />
      </Section>
      <Section id="fka-twigs">
        <FkaTwigsPhotographs />
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
  );
}

export default App;
