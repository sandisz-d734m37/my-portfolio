export default function Section({ id, children }) {
  return (
    <section id={id} className="flex justify-center py-1 scroll-mt-24">
      <div
        className="custom_page bg-white dark:bg-neutral-800 lg:w-[98%] w-[92%] max-w-full mx-0 sm:mx-2 lg:ml-0 ml-5 px-1 sm:px-5
                   py-6 sm:py-2 transition-colors duration-500 border border-black dark:border-white overflow-hidden"
      >
        {children}
      </div>
    </section>
  );
}
