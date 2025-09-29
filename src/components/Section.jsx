export default function Section({ id, children }) {
  return (
    <section id={id} className="w-full flex justify-center py-8 scroll-mt-24">
      <div
        className="custom_page bg-white dark:bg-neutral-800 w-[1080px] max-w-full mx-0 sm:mx-2 px-4 sm:px-5
                   py-6 sm:py-8 transition-colors duration-500 border border-black dark:border-white"
      >
        {children}
      </div>
    </section>
  );
}
