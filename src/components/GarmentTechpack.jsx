import { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import LoadingImage from "./LoadingImage";

export default function GarmentTechpack({ garmentPhoto, techpackPhotos }) {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Garment Image (clickable) */}
      <div className="flex justify-center mb-4 w-full">
        <div className="group relative w-full h-[80vh] rounded-2xl overflow-hidden border border-black dark:border-white">
          <LoadingImage
            src={garmentPhoto.src}
            alt={garmentPhoto.alt}
            onClick={() => setOpen(true)}
            wrapperClassName="w-full h-full"
            placeholderClassName=""
            className="cursor-pointer w-full h-full object-cover"
          />

          {/* Hover hint */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="rounded-lg px-5 py-2 text-sm font-medium text-white">
              Click to view Tech Pack
            </span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            ✕
          </button>
          {/* Flipbook container */}
          <div
            className="w-full mx-10 flex justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <HTMLFlipBook
              width={isMobile ? 300 : 1900}
              height={isMobile ? 400 : 1400}
              size="stretch"
              minWidth={300}
              maxWidth={isMobile ? 350 : 1900}
              maxHeight={isMobile ? 500 : 1400}
              drawShadow={true}
              flippingTime={800}
              usePortrait={isMobile}
              useMouseEvents={true}
              responsive={true}
              style={{ width: "100%", height: "auto" }}
            >
              {techpackPhotos.map((photo, i) => (
                <div
                  key={i}
                  className="border border-black rounded-2xl overflow-hidden bg-white dark:bg-neutral-800 flex items-center justify-center"
                >
                  {/* loading="eager": pages sit off-screen inside the flipbook, so native
                      lazy loading could leave them blank when you flip to them. */}
                  <LoadingImage
                    src={photo.src}
                    alt={photo.alt || `Tech pack page ${i + 1}`}
                    loading="eager"
                    wrapperClassName="w-full h-full"
                    placeholderClassName=""
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        </div>
      )}
    </>
  );
}
