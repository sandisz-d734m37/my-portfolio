export default function Section({ id, children }) {
  return (
    <section id={id} className="w-full flex justify-center py-12 scroll-mt-24">
      <div className="bg-white dark:bg-neutral-800 shadow-md w-[850px] max-w-full mx-4 sm:mx-0 px-4 sm:px-10 py-10 sm:py-14 border border-gray-200 dark:border-neutral-700 transition-colors duration-500">
        {children}
      </div>
    </section>
  );
}
