import { useState, useEffect, useRef } from "react";

export default function PhotoGallery({ photos }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [zoomed, setZoomed] = useState(false);
  const [naturalSize, setNaturalSize] = useState({ w: 0, h: 0 });

  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const resetZoom = () => setZoomed(false);

  const closeLightbox = () => {
    setActiveIndex(null);
    resetZoom();
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev + 1) % photos.length);
    resetZoom();
  };

  const showPrev = () => {
    setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);
    resetZoom();
  };

  // keyboard navigation
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
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, photos.length]);

  // update natural size when image loads
  const handleImageLoad = (e) => {
    const img = e.currentTarget;
    setNaturalSize({ w: img.naturalWidth, h: img.naturalHeight });
  };

  // click-to-zoom with scroll focus
  const handleZoomClick = (e) => {
    e.stopPropagation();
    if (!containerRef.current || !imageRef.current) return;

    const img = imageRef.current;
    const container = containerRef.current;
    const imgRect = img.getBoundingClientRect();

    const clickX = e.clientX - imgRect.left;
    const clickY = e.clientY - imgRect.top;
    const percentX = imgRect.width > 0 ? clickX / imgRect.width : 0.5;
    const percentY = imgRect.height > 0 ? clickY / imgRect.height : 0.5;

    setZoomed((prevZoom) => {
      const nextZoom = !prevZoom;

      if (nextZoom) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const imgW =
              imageRef.current.naturalWidth || imageRef.current.clientWidth;
            const imgH =
              imageRef.current.naturalHeight || imageRef.current.clientHeight;

            const desiredScrollLeft =
              percentX * imgW - container.clientWidth / 2;
            const desiredScrollTop =
              percentY * imgH - container.clientHeight / 2;

            const maxScrollLeft = Math.max(
              0,
              container.scrollWidth - container.clientWidth
            );
            const maxScrollTop = Math.max(
              0,
              container.scrollHeight - container.clientHeight
            );

            container.scrollLeft = Math.min(
              Math.max(desiredScrollLeft, 0),
              maxScrollLeft
            );
            container.scrollTop = Math.min(
              Math.max(desiredScrollTop, 0),
              maxScrollTop
            );
          });
        });
      } else {
        requestAnimationFrame(() => {
          container.scrollLeft = 0;
          container.scrollTop = 0;
        });
      }

      return nextZoom;
    });
  };

  return (
    <>
      {/* horizontal gallery */}
      <div className="flex overflow-x-auto gap-4 pb-4">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={photo.alt}
            onClick={() => {
              setActiveIndex(index);
              setZoomed(false);
            }}
            className="h-64 object-cover rounded-lg shadow-md cursor-zoom-in hover:opacity-80 transition-opacity flex-shrink-0"
          />
        ))}
      </div>

      {/* lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-white bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-full max-h-[100vh] w-full">
            <div
              ref={containerRef}
              // onClick={(e) => e.stopPropagation()}
              className={`relative overflow-auto ${
                zoomed ? "" : "flex items-center justify-center"
              }`}
              style={{ maxHeight: "95vh" }}
              onClick={(e) => {
                // close only if background (not the image) is clicked
                if (e.target === e.currentTarget) closeLightbox();
              }}
            >
              <img
                ref={imageRef}
                src={photos[activeIndex].src}
                alt={photos[activeIndex].alt}
                onLoad={handleImageLoad}
                onClick={handleZoomClick}
                className="shadow-xl select-none"
                style={
                  zoomed
                    ? {
                        width: naturalSize.w ? `${naturalSize.w}px` : "auto",
                        height: naturalSize.h ? `${naturalSize.h}px` : "auto",
                        maxWidth: "none",
                        maxHeight: "none",
                        cursor: "zoom-out",
                      }
                    : {
                        width: "auto",
                        height: "auto",
                        maxWidth: "100%",
                        maxHeight: "95vh",
                        cursor: "zoom-in",
                      }
                }
              />
            </div>

            {/* nav arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white text-2xl font-bold"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white text-2xl font-bold"
            >
              ›
            </button>

            {/* close */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="fixed top-6 right-6 text-white text-xl z-50"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
