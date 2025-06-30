import { useState } from "react";

export default function HUD({ toggleTheme, isDark }) {
  const [activeGroup, setActiveGroup] = useState(null);

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  function toggleGroup(group) {
    if (activeGroup !== group) {
      setActiveGroup(group);
    }
  }

  return (
    <div className="fixed top-4 left-4 right-4 sm:left-6 sm:right-auto z-50 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-lg shadow-md rounded-xl p-3 sm:p-4 flex flex-wrap sm:flex-col space-x-2 sm:space-x-0 sm:space-y-2 text-sm sm:text-base font-medium">
      {/* Home */}
      <button
        onClick={() => scrollTo("home")}
        className="cursor-pointer hover:underline text-left w-full"
      >
        Home
      </button>

      {/* Photography */}
      <button
        onClick={() => {
          scrollTo("photography");
          toggleGroup("photography");
        }}
        className="cursor-pointer hover:underline text-left w-full"
      >
        Photography
      </button>

      {/* FKA Twigs */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          activeGroup === "photography"
            ? "max-h-32 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <button
          onClick={() => scrollTo("fka-twigs")}
          className="cursor-pointer hover:underline text-left w-full pl-4 py-1"
        >
          FKA Twigs
        </button>
      </div>

      {/* Design */}
      <button
        onClick={() => {
          scrollTo("design");
          toggleGroup("design");
        }}
        className="cursor-pointer hover:underline text-left w-full"
      >
        Design
      </button>

      {/* Sub-Design */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          activeGroup === "design"
            ? "max-h-32 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <button
          onClick={() => scrollTo("sub-design-section")}
          className="cursor-pointer hover:underline text-left w-full pl-4 py-1"
        >
          Sub-Design Section
        </button>
      </div>

      {/* Contact */}
      <button
        onClick={() => scrollTo("contact")}
        className="cursor-pointer hover:underline text-left w-full"
      >
        Contact
      </button>

      <hr className="my-2 border-neutral-300 dark:border-neutral-600" />

      {/* Toggle theme */}
      <button
        onClick={toggleTheme}
        className="text-sm italic text-neutral-700 dark:text-neutral-200 text-left w-full"
      >
        Toggle {isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}
