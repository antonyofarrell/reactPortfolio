import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const GsapSection = () => {
  const containerRef = useRef();

  useGSAP(() => {
    const pEls = gsap.utils.toArray(".gsaptext > h2");
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1500",
        pin: true,
        scrub: 1,
        markers: false,
      },
    });

    pEls.forEach((el, i) => {
      timeline.fromTo(
        el,
        {
          opacity: 0,
          y: 5,
          x: i % 2 === 0 ? -300 : 300, // Alternate left/right
          backgroundPositionX: "100%",
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          backgroundPositionX: "200%",
          duration: 1.5,
          ease: "power2.out",
        },
        i * 0.8 // stagger timing
      );
    });
  }, []);

  return (
    <section
      id="gsap-section"
      className="container mx-auto px-4 h-screen flex items-center justify-center"
      ref={containerRef}
    >
      <div className="p-8">
        <div className="gsaptext p-4 bg-background/10 rounded-lg mb-4">
          <h2 className="relative tracking-[2px] text-6xl md:text-8xl p-2">
            Designer
          </h2>
          <h2 className="relative tracking-[2px] text-6xl md:text-8xl p-2 text-primary">
            Developer
          </h2>
          <h2 className="relative tracking-[2px] text-6xl md:text-8xl p-2">
            Dreamer
          </h2>
          <h2 className="relative tracking-[2px] text-6xl md:text-8xl p-2">
            Drummer
          </h2>
          <h2 className="relative tracking-[2px] text-6xl md:text-8xl p-2">
            Deliverer
          </h2>
        </div>
      </div>
    </section>
  );
};
