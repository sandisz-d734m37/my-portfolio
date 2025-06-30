import { useState, useEffect } from "react";

export default function PhotoGrid({ photos }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeLightbox = () => setActiveIndex(null);
  const showNext = () => setActiveIndex((prev) => (prev + 1) % photos.length);
  const showPrev = () =>
    setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);

  useEffect(() => {
    function handleKey(e) {
      if (activeIndex === null) return;

      switch (e.key) {
        case "ArrowRight":
          showNext();
          break;
        case "ArrowLeft":
          showPrev();
          break;
        case "Escape":
          closeLightbox();
          break;
        default:
          break;
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            onClick={() => setActiveIndex(index)}
            className="w-full h-auto shadow-lg break-inside-avoid cursor-zoom-in hover:opacity-80 transition-opacity"
          />
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full"
          >
            <img
              src={photos[activeIndex].src}
              alt={photos[activeIndex].alt}
              className="max-h-[95vh] mx-auto shadow-xl"
            />
            {/* <p className="text-sm text-neutral-300 text-center mt-4 max-w-prose mx-auto">
              {photos[activeIndex].alt}
            </p> */}

            <button
              onClick={showPrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white text-2xl font-bold"
            >
              ‹
            </button>
            <button
              onClick={showNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white text-2xl font-bold"
            >
              ›
            </button>

            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 text-white text-xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
