import { useEffect, useRef, useState } from "react";

/**
 * Drop-in replacement for <img> with a per-image loading state.
 *
 * - Shows a pulsing placeholder + spinner until the image has loaded, then fades the image in.
 * - `className` goes on the <img> (same as before).
 * - `wrapperClassName` goes on the wrapper div (use for layout, e.g. "w-full").
 * - `placeholderClassName` sets the placeholder size while loading (we don't know the
 *   image's dimensions up front). Defaults to a 240px-tall block. Removed once loaded.
 * - Any other props (onClick, style, etc.) are passed through to the <img>.
 */
export default function LoadingImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  placeholderClassName = "min-h-[240px]",
  loading = "lazy",
  ...rest
}) {
  const [status, setStatus] = useState("loading"); // "loading" | "loaded" | "error"
  const imgRef = useRef(null);

  // Handles images that finished loading (e.g. from cache) before React attached onLoad.
  useEffect(() => {
    setStatus("loading");
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) setStatus("loaded");
  }, [src]);

  const loaded = status === "loaded";

  return (
    <div
      className={`relative ${wrapperClassName} ${
        loaded ? "" : placeholderClassName
      }`}
    >
      {status === "loading" && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-neutral-100 dark:bg-neutral-700 animate-pulse"
          aria-hidden="true"
        >
          <span className="h-6 w-6 rounded-full border-2 border-neutral-400 dark:border-neutral-300 border-t-transparent animate-spin" />
        </div>
      )}

      {status === "error" && (
        <div className="absolute inset-0 flex items-center justify-center text-xs opacity-60">
          Image failed to load
        </div>
      )}

      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
        className={`${className} transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        {...rest}
      />
    </div>
  );
}
