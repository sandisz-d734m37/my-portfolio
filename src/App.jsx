import HUD from "./components/hud";
import Section from "./components/Section";

function App() {
  return (
    <div className="bg-neutral-200 text-neutral-900 min-h-screen font-sans">
      <HUD />
      <Section id="home">
        <h1 className="text-5xl font-bold mb-4">Welcome</h1>
        <p>This is your portfolio homepage.</p>
      </Section>
      <Section id="photography">
        <h2 className="text-4xl font-semibold mb-2">Photography</h2>
        <p>Photos will go here.</p>
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
