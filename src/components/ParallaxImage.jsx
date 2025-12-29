import { useEffect, useRef } from "react";

export default function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.15, // higher = more movement
  maxOffset = 60, // px clamp
}) {
  const ref = useRef(null);
  const rafRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);
  const currentY = useRef(0);
  const targetY = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      // Smooth interpolation
      currentY.current += (targetY.current - currentY.current) * 0.1;

      el.style.transform = `translate3d(0, ${currentY.current}px, 0)`;
      rafRef.current = requestAnimationFrame(update);
    };

    const onScroll = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY.current;

      // Reverse direction so scroll down moves image up
      targetY.current -= delta * speed;

      // Clamp
      targetY.current = Math.max(
        -maxOffset,
        Math.min(maxOffset, targetY.current)
      );

      lastScrollY.current = scrollY;
    };

    rafRef.current = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [speed, maxOffset]);

  return (
    <div
      ref={ref}
      className={`will-change-transform overflow-hidden ${className}`}
      aria-hidden={!alt}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover pointer-events-none"
      />
    </div>
  );
}
