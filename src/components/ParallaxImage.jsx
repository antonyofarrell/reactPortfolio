import { useEffect, useRef } from "react";

export default function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 1.0, // higher = more movement
  maxOffset = 150, // px clamp
  // media options
  controls = false,
  loop = true,
  muted = true,
  playsInline = true,
  poster = undefined,
}) {
  const ref = useRef(null);
  const rafRef = useRef(null);
  const currentY = useRef(0);
  const targetY = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

    const update = () => {
      // Smooth interpolation toward target (faster smoothing)
      currentY.current += (targetY.current - currentY.current) * 0.14;
      el.style.transform = `translate3d(0, ${currentY.current}px, 0)`;
      rafRef.current = requestAnimationFrame(update);
    };

    // Position-based handler (deterministic, avoids cumulative delta drift)
    const handle = () => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;

      // -1 .. 1 depending on element position in viewport
      const rel = (viewportCenter - center) / (window.innerHeight / 2);

      // Map relative position to offset and clamp
      targetY.current = clamp(-rel * maxOffset * speed, -maxOffset, maxOffset);
    };

    // initial calculation
    handle();

    rafRef.current = requestAnimationFrame(update);
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);

    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [speed, maxOffset]);

  return (
    <div
      ref={ref}
      className={`will-change-transform overflow-hidden ${className}`}
      aria-hidden={!alt}
    >
      {typeof src === "string" && src.match(/\.(mp4|webm|ogg)(\?.*)?$/i) ? (
        <video
          src={src}
          poster={poster}
          autoPlay={!controls}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          controls={controls}
          aria-label={alt}
          className="w-full h-full object-cover pointer-events-none"
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover pointer-events-none"
        />
      )}
    </div>
  );
}
