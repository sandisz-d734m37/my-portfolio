export default function HUD({ toggleTheme, isDark }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="transition-colors duration-500 fixed top-6 left-6 z-50 bg-white/90 dark:bg-neutral-700 backdrop-blur-lg shadow-md rounded-xl p-4 flex flex-col space-y-2">
      <button onClick={() => scrollTo("home")}>Home</button>
      <button onClick={() => scrollTo("photography")}>Photography</button>
      <button onClick={() => scrollTo("design")}>Design</button>
      <button onClick={() => scrollTo("contact")}>Contact</button>
      <hr className="my-2 border-neutral-300 dark:border-neutral-600" />
      <button
        onClick={toggleTheme}
        className="text-sm italic text-neutral-700 dark:text-neutral-200"
      >
        Toggle {isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}
