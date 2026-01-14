import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin?.(ScrollSmoother);

export default function SmoothScrollProvider({ children }) {
  const smootherRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ScrollSmoother) return;

    // create smoother
    smootherRef.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.1, // adjust intensity
      effects: true, // enable data-speed / data-lag if used
      normalizeScroll: true, // optional, helps with cross-browser scroll
      ignoreMobileResize: true,
    });

    // optional: refresh on load to fix layout jump
    setTimeout(() => {
      smootherRef.current?.refresh();
    }, 100);

    return () => {
      smootherRef.current?.kill();
      smootherRef.current = null;
    };
  }, []);

  // The provider just returns the wrapper/content structure
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
