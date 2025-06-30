export default function HUD() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-6 left-6 z-50 bg-white/90 backdrop-blur-lg shadow-md rounded-xl p-4 flex flex-col space-y-2">
      <button onClick={() => scrollTo("home")}>Home</button>
      <button onClick={() => scrollTo("photography")}>Photography</button>
      <button onClick={() => scrollTo("design")}>Design</button>
      <button onClick={() => scrollTo("contact")}>Contact</button>
    </div>
  );
}
