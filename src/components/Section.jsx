// src/components/Section.jsx
export default function Section({ id, children }) {
  return (
    <section id={id} className="w-full flex justify-center py-12 scroll-mt-24">
      <div className="transition-colors duration-500 bg-white dark:bg-neutral-800 shadow-md rounded-lg px-10 py-14 w-[850px] min-h-[1000px] max-w-full border border-gray-200 dark:border-neutral-700">
        {children}
      </div>
    </section>
  );
}
