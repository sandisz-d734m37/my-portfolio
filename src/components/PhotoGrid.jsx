import { useState, useEffect, useMemo, useRef } from "react";

export default function PhotoGrid({ photos }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [zoomed, setZoomed] = useState(false);
  const [naturalSize, setNaturalSize] = useState({ w: 0, h: 0 });

  const containerRef = useRef(null);
  const imageRef = useRef(null);

  // Shuffle photos only when `photos` changes
  const shuffledPhotos = useMemo(() => {
    const arr = [...photos];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [photos]);

  const resetZoom = () => setZoomed(false);

  const closeLightbox = () => {
    setActiveIndex(null);
    resetZoom();
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev + 1) % shuffledPhotos.length);
    resetZoom();
  };

  const showPrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + shuffledPhotos.length) % shuffledPhotos.length
    );
    resetZoom();
  };

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
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, shuffledPhotos.length]);

  // update natural size when image loads / activeIndex changes
  const handleImageLoad = (e) => {
    const img = e.currentTarget;
    setNaturalSize({ w: img.naturalWidth, h: img.naturalHeight });
  };

  // Click-to-zoom handler that focuses on click position
  // const handleZoomClick = (e) => {
  //   e.stopPropagation();
  //   if (!containerRef.current || !imageRef.current) return;

  //   const img = imageRef.current;
  //   const container = containerRef.current;

  //   // image bounding rect BEFORE toggling zoom (this represents FIT state)
  //   const imgRect = img.getBoundingClientRect();

  //   // click position relative to image
  //   const clickX = e.clientX - imgRect.left;
  //   const clickY = e.clientY - imgRect.top;

  //   // percent across image
  //   const percentX = imgRect.width > 0 ? clickX / imgRect.width : 0.5;
  //   const percentY = imgRect.height > 0 ? clickY / imgRect.height : 0.5;

  //   // toggle zoom state; after DOM updates we compute scroll position
  //   setZoomed((prevZoom) => {
  //     const nextZoom = !prevZoom;

  //     if (nextZoom) {
  //       // zooming in -> wait for the image to be laid out at its natural size, then scroll
  //       requestAnimationFrame(() => {
  //         requestAnimationFrame(() => {
  //           // natural size to use (from image.naturalWidth/naturalHeight)
  //           const imgW =
  //             imageRef.current.naturalWidth || imageRef.current.clientWidth;
  //           const imgH =
  //             imageRef.current.naturalHeight || imageRef.current.clientHeight;

  //           // compute desired scroll so clicked point is centered
  //           const desiredScrollLeft =
  //             percentX * imgW - container.clientWidth / 2;
  //           const desiredScrollTop =
  //             percentY * imgH - container.clientHeight / 2;

  //           // clamp
  //           const maxScrollLeft = Math.max(
  //             0,
  //             container.scrollWidth - container.clientWidth
  //           );
  //           const maxScrollTop = Math.max(
  //             0,
  //             container.scrollHeight - container.clientHeight
  //           );

  //           container.scrollLeft = Math.min(
  //             Math.max(desiredScrollLeft, 0),
  //             maxScrollLeft
  //           );
  //           container.scrollTop = Math.min(
  //             Math.max(desiredScrollTop, 0),
  //             maxScrollTop
  //           );
  //         });
  //       });
  //     } else {
  //       // zooming out -> reset scroll to center
  //       requestAnimationFrame(() => {
  //         container.scrollLeft = 0;
  //         container.scrollTop = 0;
  //       });
  //     }

  //     return nextZoom;
  //   });
  // };

  const handleZoomClick = (e) => {
    if (!containerRef.current || !imageRef.current) return;
    const img = imageRef.current;
    const container = containerRef.current;
    const rect = img.getBoundingClientRect();

    // was click outside image? close
    const inside =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;
    if (!inside) {
      closeLightbox();
      return;
    }

    // position clicked within the image
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    const percentX = clickX / rect.width;
    const percentY = clickY / rect.height;

    setZoomed((prev) => {
      const next = !prev;

      requestAnimationFrame(() => {
        if (next) {
          // after the browser paints zoomed size
          requestAnimationFrame(() => {
            const fullW = img.naturalWidth;
            const fullH = img.naturalHeight;

            // compute scroll so clicked point stays centered
            const targetLeft = percentX * fullW - container.clientWidth / 2;
            const targetTop = percentY * fullH - container.clientHeight / 2;

            container.scrollLeft = Math.max(
              0,
              Math.min(targetLeft, fullW - container.clientWidth)
            );
            container.scrollTop = Math.max(
              0,
              Math.min(targetTop, fullH - container.clientHeight)
            );
          });
        } else {
          container.scrollLeft = 0;
          container.scrollTop = 0;
        }
      });

      return next;
    });
  };

  return (
    <>
      {/* Grid */}
      {/* <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"> */}
      <div className="columns-2 lg:gap-4 gap-2 lg:space-y-4 space-y-2">
        {shuffledPhotos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            onClick={() => {
              setActiveIndex(index);
              setZoomed(false);
            }}
            className="w-full h-auto shadow-md break-inside-avoid cursor-zoom-in hover:opacity-80 transition-opacity"
          />
        ))}
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-full max-h-[95vh] w-full">
            {/* Container: center when not zoomed, top-left when zoomed */}
            {/* container: scrollable only when zoomed */}
            <div
              ref={containerRef}
              className={`relative w-screen h-screen ${
                zoomed ? "overflow-auto" : "overflow-hidden"
              } flex items-center justify-center`}
              onClick={(e) => {
                // close only if background (not the image) is clicked
                if (e.target === e.currentTarget) closeLightbox();
              }}
            >
              <img
                ref={imageRef}
                src={shuffledPhotos[activeIndex].src}
                alt={shuffledPhotos[activeIndex].alt}
                onLoad={handleImageLoad}
                onClick={handleZoomClick}
                className="shadow-xl select-none transition-all duration-300 ease-in-out"
                style={
                  zoomed
                    ? {
                        display: "block",
                        width: `${naturalSize.w}px`,
                        height: `${naturalSize.h}px`,
                        maxWidth: "none",
                        maxHeight: "none",
                        cursor: "zoom-out",
                      }
                    : {
                        display: "block",
                        width: "100%",
                        height: "93%",
                        objectFit: "contain",
                        cursor: "zoom-out",
                      }
                }
              />
            </div>

            {/* Close */}
            <button
              onClick={closeLightbox}
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
