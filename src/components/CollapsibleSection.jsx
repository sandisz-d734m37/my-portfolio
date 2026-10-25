import { Suspense, useEffect, useRef, useState } from "react";

function Chevron({ open }) {
  // Points down (v) when closed, rotates to point up (^) when open.
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-500 motion-reduce:transition-none ${
        open ? "rotate-180" : ""
      }`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function SectionFallback() {
  return (
    <div className="flex items-center justify-center gap-3 py-16 text-sm opacity-70">
      <span className="h-5 w-5 rounded-full border-2 border-current border-t-transparent animate-spin" />
      Loading…
    </div>
  );
}

/**
 * Accordion section.
 * - `open` and `onSelect` are controlled by the parent, which keeps at most one section open.
 * - Clicking a header calls `onSelect`; the parent decides whether that opens the section
 *   (closing whichever was open) or closes it if it's already open.
 * - Children are NOT mounted until the first time the section opens, so their
 *   images don't start downloading until then. After that they stay mounted,
 *   so switching back to a section is instant and images aren't re-fetched.
 */
export default function CollapsibleSection({
  id,
  label,
  open,
  onSelect,
  children,
}) {
  const [mounted, setMounted] = useState(open);
  const [expanded, setExpanded] = useState(open);
  const panelRef = useRef(null);
  const panelId = `${id}-panel`;
  const headerId = `${id}-header`;

  // On open: mount the children first (while still collapsed), then on the
  // next frames flip to expanded so the height transition actually animates.
  useEffect(() => {
    if (!open) {
      setExpanded(false);
      return;
    }
    setMounted(true);
    let raf2;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setExpanded(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [open]);

  // Keep collapsed content out of the tab order / screen readers.
  // (Set via DOM so it works on both React 18 and 19.)
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    if (open) el.removeAttribute("inert");
    else el.setAttribute("inert", "");
  }, [open]);

  return (
    <section id={id} className="flex justify-center py-[3px]">
      <div
        className="custom_page bg-white dark:bg-neutral-800 lg:w-[98%] w-[92%] max-w-full mx-0 sm:mx-2 lg:ml-0 px-1 sm:px-5
                   py-2 transition-colors duration-500 border border-black dark:border-white overflow-hidden rounded-md"
      >
        <h2>
          <button
            type="button"
            id={headerId}
            onClick={onSelect}
            aria-expanded={open}
            aria-controls={panelId}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-2xl sm:text-4xl font-semibold cursor-pointer hover:opacity-70 transition-opacity"
          >
            <span>{label}</span>
            <Chevron open={open} />
          </button>
        </h2>

        {/* grid-template-rows 0fr -> 1fr animates to the content's natural height */}
        <div
          id={panelId}
          ref={panelRef}
          role="region"
          aria-labelledby={headerId}
          className="grid transition-[grid-template-rows] duration-500 ease-in-out motion-reduce:transition-none"
          style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
        >
          <div className="min-h-0 overflow-hidden">
            {mounted && (
              <Suspense fallback={<SectionFallback />}>{children}</Suspense>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
