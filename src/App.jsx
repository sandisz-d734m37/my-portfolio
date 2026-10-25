import { lazy, useEffect, useState } from "react";
import Section from "./components/Section";
import FullScreenSection from "./components/FullScreenSection";
import CollapsibleSection from "./components/CollapsibleSection";
import scmtLogo from "./assets/SCMT_red.svg";

// Each gallery is its own JS chunk, downloaded only when its section is first opened.
const ProducedGarments = lazy(() => import("./components/ProducedGarments"));
const GraphicsPage = lazy(() => import("./components/GraphicsPage"));
const EcomPhotography = lazy(() => import("./components/EcomPhotography"));
const PhotographyHomePage = lazy(
  () => import("./components/PhotographyHomePage"),
);
// const FkaTwigsPhotographs = lazy(() => import("./components/FkaTwigsPhotographs"));
// const MiscelaniousConcerts = lazy(() => import("./components/MiscelaniousConcerts"));

// Sections with a `Component` are collapsible. Home and Contact are always open.
const sections = [
  { id: "home", label: "Home" },
  {
    id: "produced-garments",
    label: "Produced Garments",
    Component: ProducedGarments,
  },
  { id: "graphics", label: "Graphics", Component: GraphicsPage },
  {
    id: "ecom-photography",
    label: "Ecommerce Photography",
    Component: EcomPhotography,
  },
  {
    id: "photography",
    label: "Misc. Photography",
    Component: PhotographyHomePage,
  },
  // { id: "fka-twigs", label: "FKA Twigs", Component: FkaTwigsPhotographs },
  // { id: "misc-concerts", label: "Misc. Concert Photography", Component: MiscelaniousConcerts },
  { id: "contact", label: "Contact" },
];

const collapsibleSections = sections.filter((s) => s.Component);

// The section that's open when the page loads.
const DEFAULT_SECTION = "produced-garments";

// Gap (px) left above a section's top edge when we scroll to it. 0 = flush with the top of the screen.
const SCROLL_OFFSET = 4;
// Should be a little longer than the 500ms collapse/expand transition in CollapsibleSection.
const SCROLL_DURATION = 650;

let cancelActiveScroll = null;

/**
 * Scrolls so the top of the section with `id` sits at the top of the page.
 *
 * Why not scrollIntoView({ behavior: "smooth" })? When one section opens and another
 * closes, the page layout is changing for ~500ms. A browser smooth-scroll aims at the
 * position the section had when you clicked, so it lands somewhere stale (usually
 * mid-screen). This animates the scroll ourselves and re-measures the target every
 * frame, so it follows the section as the layout settles.
 *
 * The animation stops immediately if the user grabs the page (wheel / touch / keys).
 */
function scrollToSectionTop(id) {
  if (cancelActiveScroll) cancelActiveScroll();

  const root = document.documentElement;
  const prevScrollBehavior = root.style.scrollBehavior;
  // If your CSS sets `scroll-behavior: smooth`, per-frame scrollTo calls would fight it.
  root.style.scrollBehavior = "auto";

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const start = window.scrollY;
  const startTime = performance.now();
  let raf = 0;
  let stopped = false;

  const interruptEvents = ["wheel", "touchstart", "keydown"];

  function stop() {
    if (stopped) return;
    stopped = true;
    cancelAnimationFrame(raf);
    interruptEvents.forEach((ev) => window.removeEventListener(ev, stop));
    root.style.scrollBehavior = prevScrollBehavior;
    if (cancelActiveScroll === stop) cancelActiveScroll = null;
  }

  interruptEvents.forEach((ev) =>
    window.addEventListener(ev, stop, { passive: true }),
  );
  cancelActiveScroll = stop;

  function tick(now) {
    if (stopped) return;
    const el = document.getElementById(id);
    if (!el) return stop();

    // Re-measured every frame because the layout above this section may still be collapsing.
    const target = Math.max(
      0,
      el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET,
    );
    const p = reduceMotion
      ? 1
      : Math.min(1, (now - startTime) / SCROLL_DURATION);
    const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
    window.scrollTo(0, start + (target - start) * eased);

    if (p < 1) raf = requestAnimationFrame(tick);
    else stop();
  }

  raf = requestAnimationFrame(tick);
}

// If the URL has a hash for a collapsible section (e.g. /#graphics), start with that one open
// instead of the default, so we don't download the default section's images for nothing.
function getInitialActiveId() {
  const id = window.location.hash.slice(1);
  return collapsibleSections.some((s) => s.id === id) ? id : DEFAULT_SECTION;
}

function App() {
  // at most one collapsible section is open at a time.
  const [activeId, setActiveId] = useState(getInitialActiveId);

  // Header click: open that section (closing the current one), or close it if it's already open.
  function selectSection(id) {
    if (id === activeId) {
      setActiveId(null); // all sections collapsed
      return;
    }
    setActiveId(id);
    scrollToSectionTop(id);
  }

  // Home menu click: open the section (if collapsible) and scroll to its top.
  function goToSection(section) {
    if (section.Component) setActiveId(section.id);
    scrollToSectionTop(section.id);
  }

  // Deep links: sandisz.com/#graphics scrolls to that section on load.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!sections.some((s) => s.id === id)) return;
    const t = setTimeout(() => scrollToSectionTop(id), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="transition-colors duration-500 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 min-h-screen google-sans-code-mypfolio flex">
      <div className="flex-1">
        <FullScreenSection id="home">
          <div className="d-flex justify-content-center align-items-center">
            <div className="text-center lg:py-[20vh] py-[5vh]">
              <div className="flex justify-center mb-4">
                <img
                  src={scmtLogo}
                  alt="SCMT logo"
                  className="w-[100px] h-[100px] mb-[10vh]"
                />
              </div>

              <h1 className="lg:text-5xl text-2xl font-bold mb-[10vh]">
                Sandisz C.M. Thieme
              </h1>
              <p className="google-sans-code-mypfolio mb-[10vh]">WELCOME</p>

              <div className="d-flex flex-col gap-3 py-5">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => goToSection(section)}
                    className="px-2 text-left text-sm hover:underline text-black dark:text-white google-sans-code-mypfolio"
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </FullScreenSection>

        {collapsibleSections.map(({ id, label, Component }) => (
          <CollapsibleSection
            key={id}
            id={id}
            label={label}
            open={activeId === id}
            onSelect={() => selectSection(id)}
          >
            <Component />
          </CollapsibleSection>
        ))}

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
