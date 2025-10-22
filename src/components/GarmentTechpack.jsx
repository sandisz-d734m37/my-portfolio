import { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";

export default function GarmentTechpack({ garmentPhoto, techpackPhotos }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full">
      {/* Left: Garment Photo */}
      <div className="w-full sm:w-[25%] flex justify-center">
        <img
          src={garmentPhoto.src}
          alt={garmentPhoto.alt}
          className="object-contain max-h-[80vh] border border-black dark:border-white rounded-2xl"
        />
      </div>

      {/* Right: Flipbook */}
      <div className="w-full sm:w-[75%] flex justify-center">
        <div className="w-full sm:max-w-[100%] flex justify-center flex-none">
          <HTMLFlipBook
            width={isMobile ? 300 : 650} // smaller width on mobile
            height={isMobile ? 400 : 500} // adjust height accordingly
            size="stretch"
            minWidth={300}
            maxWidth={isMobile ? 350 : 650}
            maxHeight={isMobile ? 500 : 700}
            drawShadow={true}
            flippingTime={800}
            usePortrait={isMobile} // single-page on mobile
            useMouseEvents={true}
            responsive={true}
            style={{ width: "100%", height: "auto" }}
          >
            {techpackPhotos.map((photo, i) => (
              <div
                key={i}
                className="bg-white dark:bg-neutral-800 flex items-center justify-center"
              >
                <img
                  src={photo.src}
                  alt={photo.alt || `Tech pack page ${i + 1}`}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </HTMLFlipBook>
        </div>
      </div>
    </div>
  );
}
