import { useState, useEffect, useRef } from "react";

export default function LegendNav({ sections, onToggle }) {
  const [expanded, setExpanded] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const lineRef = useRef(null);

  const lineThickness = 2;
  const capWidth = 16;
  const capHeight = 2;

  // Track scroll for red dot and current section
  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScrollPercent(docHeight > 0 ? scrollTop / docHeight : 0);

      // Determine current section
      let active = 0;
      sections.forEach((section, idx) => {
        const el = document.getElementById(section.id);
        if (!el) return;
        if (scrollTop >= el.offsetTop - 10) active = idx;
      });
      setCurrentSection(active);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  function scrollToSection(idx) {
    const el = document.getElementById(sections[idx].id);
    if (!el) return;
    window.scrollTo({
      top: el.offsetTop,
      behavior: "smooth",
    });
  }

  function handleToggle() {
    setExpanded((prev) => {
      const next = !prev;
      if (onToggle) onToggle(next);
      return next;
    });
  }

  return (
    <div
      className="fixed left-0 top-0 bottom-0 flex border-r border-black dark:border-white bg-white
                    dark:bg-neutral-800 transition-all duration-300 z-50"
    >
      {/* Left column: line + red dot */}
      <div className="relative lg:w-12 w-5 flex flex-col items-center py-6">
        <button
          onClick={handleToggle}
          className="mb-4 relative w-6 h-6 flex flex-col justify-center items-center gap-1"
        >
          <span
            className={`block w-2 h-0.5 bg-black dark:bg-white transform transition-all duration-300 ${
              expanded ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-2 h-0.5 bg-black dark:bg-white transform transition-all duration-300 ${
              expanded ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-2 h-0.5 bg-black dark:bg-white transform transition-all duration-300 ${
              expanded ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        <div className="relative flex flex-col items-center h-full w-full">
          {/* Top cap */}
          <div
            className="absolute top-0 bg-black dark:bg-white"
            style={{ width: capWidth, height: capHeight }}
          />

          {/* Vertical line */}
          <div
            ref={lineRef}
            className="relative flex-1 bg-black dark:bg-white cursor-pointer my-[12px]"
            style={{ width: `${lineThickness}px` }}
            onClick={(e) => {
              if (!lineRef.current) return;
              const rect = lineRef.current.getBoundingClientRect();
              const clickY = e.clientY - rect.top;
              window.scrollTo({
                top:
                  (clickY / rect.height) *
                  (document.body.scrollHeight - window.innerHeight),
                behavior: "smooth",
              });
            }}
          >
            {/* Red dot */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-black border border-black transition-all duration-150"
              style={{ top: `calc(${scrollPercent * 100}% - 0.5rem)` }}
            />
          </div>

          {/* Bottom cap */}
          <div
            className="absolute bottom-0 bg-black dark:bg-white"
            style={{ width: capWidth, height: capHeight }}
          />
        </div>
      </div>

      {/* Right column: sidebar */}
      <div
        className={`relative overflow-hidden transition-all duration-300 py-6 ${
          expanded ? "w-32" : "w-0"
        }`}
      >
        <div className="flex flex-col gap-3 pl-2">
          {sections.map((section, idx) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(idx)}
              className={`text-left text-sm hover:underline ${
                idx === currentSection
                  ? "text-red-600"
                  : "text-black dark:text-white"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
