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
    <div
      className="fixed top-4 left-4 right-4 sm:left-6 sm:right-auto z-50 bg-white dark:bg-neutral-800/90
                 backdrop-blur-lg p-3 sm:p-4 flex flex-wrap sm:flex-col space-x-2 sm:space-x-0 sm:space-y-2
                 text-sm sm:text-base font-medium border border-black dark:border-white"
    >
      {/* Home */}
      <button
        onClick={() => scrollTo("home")}
        className="cursor-pointer hover:underline text-left w-full"
      >
        Home
      </button>

      {/* Puppet Theater */}
      {/* <button
        onClick={() => {
          scrollTo("puppet-theater");
          toggleGroup("puppet-theater");
        }}
        className="cursor-pointer hover:underline text-left w-full"
      >
        Puppet Theater
      </button> */}

      {/* PT Photography */}
      {/* <div
        className={`transition-all duration-300 overflow-hidden ${
          activeGroup === "puppet-theater"
            ? "max-h-32 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <button
          onClick={() => scrollTo("puppet-theater-photography")}
          className="cursor-pointer hover:underline text-left w-full pl-4 py-1"
        >
          Photography
        </button>
      </div> */}

      {/* PT Clothing Design */}
      {/* <div
        className={`transition-all duration-300 overflow-hidden ${
          activeGroup === "puppet-theater"
            ? "max-h-32 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <button
          onClick={() => scrollTo("puppet-theater-clothing-design")}
          className="cursor-pointer hover:underline text-left w-full pl-4 py-1"
        >
          Clothing Design
        </button>
      </div> */}

      {/* PT Web Design */}
      {/* <div
        className={`transition-all duration-300 overflow-hidden ${
          activeGroup === "puppet-theater"
            ? "max-h-32 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <button
          onClick={() => scrollTo("puppet-theater-web-design")}
          className="cursor-pointer hover:underline text-left w-full pl-4 py-1"
        >
          Web Design
        </button>
      </div> */}

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
